"""
typewriter_gui.py
GUI for generating a typewriter GIF with custom fonts and preview.

Dependencies:
    pip install pillow
"""

import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image, ImageDraw, ImageFont, ImageTk

# ---------------- CONFIG ----------------
BG_COLOR = (30, 30, 30)
TEXT_COLOR = (235, 235, 235)
CURSOR_CHAR = "|"
OUT_FILENAME = "typewriter.gif"
# ----------------------------------------

class TypewriterGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Typewriter GIF Generator")
        self.font_path = None

        # ----- Input Controls -----
        tk.Label(root, text="Enter Text:").pack(anchor="w", padx=5, pady=2)
        self.text_box = tk.Text(root, width=50, height=5)
        self.text_box.pack(padx=5, pady=5)

        tk.Button(root, text="Choose Font (.ttf/otf)", command=self.choose_font).pack(pady=5)

        control_frame = tk.Frame(root)
        control_frame.pack(pady=5)

        tk.Label(control_frame, text="Font Size:").grid(row=0, column=0, padx=5)
        self.font_size_var = tk.IntVar(value=36)
        tk.Entry(control_frame, textvariable=self.font_size_var, width=5).grid(row=0, column=1)

        tk.Label(control_frame, text="Line Spacing:").grid(row=0, column=2, padx=5)
        self.spacing_var = tk.DoubleVar(value=1.2)
        tk.Entry(control_frame, textvariable=self.spacing_var, width=5).grid(row=0, column=3)

        self.center_var = tk.BooleanVar(value=False)
        tk.Checkbutton(control_frame, text="Center Align", variable=self.center_var).grid(row=0, column=4, padx=5)

        # ----- Preview & Actions -----
        tk.Button(root, text="Preview Final Frame", command=self.preview).pack(pady=5)
        tk.Button(root, text="Generate GIF", command=self.generate_gif).pack(pady=5)

        self.preview_label = tk.Label(root, text="Preview will appear here")
        self.preview_label.pack(padx=5, pady=10)

    def choose_font(self):
        path = filedialog.askopenfilename(filetypes=[("Font files", "*.ttf;*.otf")])
        if path:
            self.font_path = path
            messagebox.showinfo("Font Selected", f"Using font: {path}")

    def render_text_image(self, text, font, spacing, center=False, add_cursor=False):
        lines = text.splitlines() or [""]
        dummy_img = Image.new("RGB", (1, 1))
        dummy_draw = ImageDraw.Draw(dummy_img)

        line_sizes = [dummy_draw.textbbox((0, 0), line, font=font) for line in lines]
        line_heights = [(box[3] - box[1]) for box in line_sizes]
        line_widths = [(box[2] - box[0]) for box in line_sizes]

        width = max(line_widths) + 40
        height = sum(line_heights) + int(len(lines) * font.size * spacing)
        img = Image.new("RGB", (width, height), color=BG_COLOR)
        draw = ImageDraw.Draw(img)

        y = 20
        for idx, line in enumerate(lines):
            line_w = line_widths[idx]
            line_h = line_heights[idx]
            x = 20
            if center:
                x = (width - line_w) // 2
            draw.text((x, y), line, font=font, fill=TEXT_COLOR)
            y += int(line_h * spacing)

        if add_cursor and lines:
            # Place cursor at end of last line
            last_idx = len(lines) - 1
            last_line_w = line_widths[last_idx]
            last_line_h = line_heights[last_idx]
            last_x = 20
            if center:
                last_x = (width - last_line_w) // 2
            draw.text((last_x + last_line_w + 3, y - last_line_h), CURSOR_CHAR, font=font, fill=TEXT_COLOR)

        return img

    def preview(self):
        text = self.text_box.get("1.0", tk.END).strip()
        if not text:
            messagebox.showwarning("No Text", "Please enter some text.")
            return
        try:
            font = ImageFont.truetype(self.font_path or "DejaVuSans.ttf", self.font_size_var.get())
        except:
            font = ImageFont.load_default()

        img = self.render_text_image(text, font, self.spacing_var.get(), self.center_var.get())
        img.thumbnail((400, 200))
        self.preview_img = ImageTk.PhotoImage(img)
        self.preview_label.config(image=self.preview_img, text="")

    def generate_gif(self):
        text = self.text_box.get("1.0", tk.END).strip()
        if not text:
            messagebox.showwarning("No Text", "Please enter some text.")
            return
        try:
            font = ImageFont.truetype(self.font_path or "DejaVuSans.ttf", self.font_size_var.get())
        except:
            font = ImageFont.load_default()

        frames, durations = [], []
        flat_text = text.replace("\r", "")

        # Build typewriter frames
        for i in range(1, len(flat_text) + 1):
            img = self.render_text_image(flat_text[:i], font, self.spacing_var.get(), self.center_var.get(), add_cursor=True)
            frames.append(img)
            durations.append(60)

        # Final frame (no cursor)
        frames.append(self.render_text_image(flat_text, font, self.spacing_var.get(), self.center_var.get()))
        durations.append(1000)

        frames[0].save(
            OUT_FILENAME,
            save_all=True,
            append_images=frames[1:],
            duration=durations,
            loop=0,
            disposal=2
        )
        messagebox.showinfo("Done", f"GIF saved as {OUT_FILENAME}")

if __name__ == "__main__":
    root = tk.Tk()
    app = TypewriterGUI(root)
    root.mainloop()
