export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="GSSMUN Logo">
       <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
        <path fillRule="evenodd" clipRule="evenodd" d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM50 8C26.8173 8 8 26.8173 8 50C8 73.1827 26.8173 92 50 92C73.1827 92 92 73.1827 92 50C92 26.8173 73.1827 8 50 8Z" fill="currentColor"/>
        <path d="M50 16C31.2223 16 16 31.2223 16 50C16 68.7777 31.2223 84 50 84C68.7777 84 84 68.7777 84 50C84 31.2223 68.7777 16 50 16ZM50 58C54.4183 58 58 54.4183 58 50C58 45.5817 54.4183 42 50 42C45.5817 42 42 45.5817 42 50C42 54.4183 45.5817 58 50 58Z" fill="hsl(var(--foreground))"/>
      </svg>
      <span className="text-xl font-headline font-bold text-foreground">GSSMUN</span>
    </div>
  );
}
