import { useState } from 'react'
export default function Login() {
const [showPassword, setShowPassword] = useState(false)
 const [message, setMessage] = useState('')
 function handleSubmit(event) {
   event.preventDefault()
   const data = new FormData(event.currentTarget)
   if (data.has('confirmarClave') && data.get('claveAcceso') !== data.get('confirmarClave')) {
     setMessage('Las contraseñas no coinciden.'); return
   }
   setMessage('Formulario validado. La autenticación real requiere conectar el backend.')
 }

return (<div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container"><header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 max-w-[1440px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-md"><img alt="ByteElement Logo" className="h-8 w-auto object-contain" src="/images/7d1a13a7407fe2f6.png"/><span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface select-none">{"ByteElement"}</span><div className="hidden sm:flex items-center gap-space-xs pl-space-md"><span className="w-1.5 h-1.5 bg-primary-container animate-pulse"></span><span className="font-label-mono text-caption uppercase text-on-surface-variant">{"NODO_AUTENTICACION_01 :: EN LÍNEA"}</span></div></div><nav className="flex items-center gap-space-lg"><a aria-current="page" className="uppercase transition-colors bg-primary-container text-on-primary-container font-headline-sm" data-path="login" href="/login">{"Autenticación"}</a><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors" data-path="hardware-status" href="#informacion">{"Nodos de Telemetría"}</a><a className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-on-surface transition-colors" data-path="system-support" href="#informacion">{"Soporte Directo"}</a></nav><div className="flex items-center gap-space-md"><div className="hidden md:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container"><span className="material-symbols-outlined text-primary text-[14px]">{"verified_user"}</span><span className="font-label-mono text-caption uppercase text-on-surface">{"CIFRADO SSL DE 256 BITS"}</span></div><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">{"person"}</span></div></div></div></header><main className="w-full pt-16 bg-surface flex-1 flex flex-col"><div className="flex flex-col w-full">
<div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin py-space-lg lg:py-space-xl flex-1 flex items-center justify-center">
<div className="w-full grid grid-cols-1 lg:grid-cols-12 bg-surface-container-lowest shadow-[0_20px_50px_rgba(11,28,48,0.06)] relative overflow-hidden">
<div className="hidden lg:flex lg:col-span-6 flex-col justify-between p-space-xl bg-surface-container-low relative overflow-hidden">
<div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-lowest shadow-sm">
<span className="w-2 h-2 bg-primary-container animate-ping"></span>
<span className="w-1.5 h-1.5 bg-primary-container"></span>
<span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">{"SERIE 01 // CHASIS MK-80"}</span>
</div>
<div className="font-label-mono text-caption text-secondary uppercase tracking-widest">{"\n              REV_SISTEMA: v4.2.0\n            "}</div>
</div>
<div className="flex flex-col gap-space-xs mt-space-sm">
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">{"\n              Ingeniería Táctil de Alta Frecuencia.\n            "}</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">{"\n              Precisión artesanal y respuesta instantánea. Conecta tu ecosistema de hardware ByteElement para sincronización de macros y telemetría de rendimiento térmico.\n            "}</p>
</div>
</div>
<div className="relative z-10 my-space-lg group">
<div className="relative bg-surface-container-lowest p-2 shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.01]">
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container flex items-center justify-center">
<img className="w-full h-full object-cover object-center filter contrast-[1.03] transition-all duration-700 group-hover:scale-105" data-alt="Ultra premium custom mechanical keyboard on a clinical white and light gray wool desk mat, dark graphite keycaps with ionized cyan sub-legends, braided coiled aviator cable with metallic accents, clean modern studio workstation with soft directional shadows" src="/images/447744c4e479a6f3.png" alt="Ultra premium custom mechanical keyboard on a clinical white and light gray wool desk mat, dark graphite keycaps with ionized cyan sub-legends, braided coiled aviator cable with metallic accents, clean modern studio workstation with soft directional shadows"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-3 left-3 flex items-center gap-2 bg-on-surface/85 backdrop-blur-md px-2.5 py-1 text-surface">
<span className="material-symbols-outlined text-primary-container text-[14px]">{"tune"}</span>
<span className="font-label-mono text-caption uppercase text-surface tracking-wider">{"CALIBRACIÓN 1000 HZ"}</span>
</div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-surface-container-lowest">
<div className="font-label-mono text-caption tracking-wider">{"NÚCLEO: ALUMINIO CNC 6063"}</div>
<div className="flex items-center gap-1 font-label-mono text-caption text-primary-container">
<span className="material-symbols-outlined text-[14px]">{"bolt"}</span>
<span >{"LATENCIA: 0.8 ms"}</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-space-md">
<div className="p-2.5 bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-mono text-caption text-on-surface-variant uppercase">{"Estructura"}</span>
<span className="font-headline-sm text-label-caps font-bold text-on-surface uppercase">{"Montaje con Junta"}</span>
</div>
<div className="p-2.5 bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-mono text-caption text-on-surface-variant uppercase">{"Interruptores"}</span>
<span className="font-headline-sm text-label-caps font-bold text-on-surface uppercase">{"Intercambiables 5 Pines"}</span>
</div>
<div className="p-2.5 bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-mono text-caption text-on-surface-variant uppercase">{"Respuesta"}</span>
<span className="font-headline-sm text-label-caps font-bold text-on-surface uppercase">{"< 1 ms de Latencia"}</span>
</div>
<div className="p-2.5 bg-surface-container-lowest shadow-sm flex flex-col gap-0.5">
<span className="font-label-mono text-caption text-on-surface-variant uppercase">{"Microprograma"}</span>
<span className="font-headline-sm text-label-caps font-bold text-on-surface uppercase">{"Sincronización en Nube"}</span>
</div>
</div>
</div>
<div className="relative z-10 pt-space-md border-t border-surface-container flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">{"verified"}</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">{"Hardware probado y calibrado por analistas y creadores de deportes electrónicos."}</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-on-surface"></span>
<span className="w-1.5 h-1.5 bg-outline-variant"></span>
<span className="w-1.5 h-1.5 bg-outline-variant"></span>
</div>
</div>
</div>
<div className="col-span-1 lg:col-span-6 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
<div className="w-full max-w-md mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs mb-1">
<span className="w-2 h-2 bg-on-surface"></span>
<span className="font-label-mono text-caption uppercase text-primary tracking-widest font-semibold">{"PASARELA AUTENTICADA"}</span>
</div>
<h1 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface tracking-tight">{"\n              Iniciar Sesión\n            "}</h1>
<p className="font-body-md text-body-md text-on-surface-variant">{"\n              Ingresa tus credenciales para sincronizar tus dispositivos, perfiles térmicos y gestionar tus pedidos de laboratorio.\n            "}</p>
</div>
<div className="flex flex-col gap-space-sm">
<span className="font-label-mono text-caption text-secondary uppercase tracking-wider">{"Acceso Rápido Integrado"}</span>
<div className="grid grid-cols-3 gap-space-sm">
<button aria-label="Ingresar con Steam" className="flex items-center justify-center gap-2 py-2.5 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface transition-all group" type="button" onClick={() => setMessage("Este proveedor requiere conexión con el backend.")}>
<svg className="w-4 h-4 fill-current text-on-surface group-hover:text-primary transition-colors" viewBox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12c0 4.54 3.03 8.38 7.19 9.58l3.18-4.55a3.99 3.99 0 0 1-1.37-3.03c0-.3.04-.59.1-.88L7.69 11.2a4.996 4.996 0 0 1-3.69-4.8c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .32-.04.64-.1.95l3.41 1.91c.9-.55 1.97-.86 3.1-.86 3.31 0 6 2.69 6 6s-2.69 6-6 6c-1.88 0-3.56-.87-4.66-2.23l-3.37 4.82C10.74 21.92 11.36 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path>
</svg>
<span className="font-label-caps text-caption text-on-surface font-semibold">{"STEAM"}</span>
</button>
<button aria-label="Ingresar con Discord" className="flex items-center justify-center gap-2 py-2.5 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface transition-all group" type="button" onClick={() => setMessage("Este proveedor requiere conexión con el backend.")}>
<svg className="w-4 h-4 fill-current text-on-surface group-hover:text-primary transition-colors" viewBox="0 0 24 24">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
<span className="font-label-caps text-caption text-on-surface font-semibold">{"DISCORD"}</span>
</button>
<button aria-label="Ingresar con Google" className="flex items-center justify-center gap-2 py-2.5 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface transition-all group" type="button" onClick={() => setMessage("Este proveedor requiere conexión con el backend.")}>
<svg className="w-4 h-4 fill-current text-on-surface group-hover:text-primary transition-colors" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"></path>
</svg>
<span className="font-label-caps text-caption text-on-surface font-semibold">{"GOOGLE"}</span>
</button>
</div>
</div>
<div className="relative flex items-center justify-center my-1">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-surface-container"></div>
</div>
<div className="relative bg-surface-container-lowest px-4">
<span className="font-label-mono text-caption text-secondary uppercase tracking-widest">{"O CON TU CORREO O IDENTIFICADOR ELEMENT"}</span>
</div>
</div>
<form className="flex flex-col gap-space-md" id="loginForm" onSubmit={handleSubmit}>
<div className="flex flex-col gap-1.5">
<label className="flex items-center justify-between font-label-caps text-caption uppercase text-on-surface" htmlFor="identifier">
<span >{"CORREO ELECTRÓNICO O IDENTIFICADOR ELEMENT"}</span>
<span className="font-label-mono text-secondary text-[10px]">{"IDENTIFICADOR_AUT"}</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-secondary text-[18px] pointer-events-none">{"alternate_email"}</span>
<input className="w-full h-11 pl-10 pr-4 bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" id="identifier" name="identifier" placeholder="nombre@ejemplo.com o BE-1042" required={true} type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-caps text-caption uppercase text-on-surface" htmlFor="password">{"\n                  CONTRASEÑA\n                "}</label>
<a className="font-label-mono text-caption text-primary hover:text-primary-container hover:underline transition-colors uppercase tracking-tight" href="#informacion">{"\n                  ¿Olvidaste tu contraseña?\n                "}</a>
</div>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3.5 text-secondary text-[18px] pointer-events-none">{"lock"}</span>
<input className="w-full h-11 pl-10 pr-12 bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-outline/70 focus:bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-primary-container transition-all" id="password" name="password" placeholder="••••••••••••" required={true} type={showPassword ? "text" : "password"} autoComplete="current-password"/>
<button aria-label="Alternar visibilidad de contraseña" className="absolute right-3.5 text-secondary hover:text-on-surface p-1 transition-colors" id="togglePassword" type="button" onClick={() => setShowPassword(!showPassword)}>
<span className="material-symbols-outlined text-[20px]" id="eyeIcon">{"visibility"}</span>
</button>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2.5 cursor-pointer select-none group">
<div className="relative flex items-center">
<input defaultChecked={true} className="peer sr-only" id="rememberDevice" type="checkbox" name="rememberDevice"/>
<div className="w-4 h-4 bg-surface-container peer-checked:bg-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-primary-container text-[14px] opacity-0 peer-checked:opacity-100 font-bold">{"check"}</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">{"\n                  Mantener sesión iniciada en este dispositivo\n                "}</span>
</label>
</div>
<button className="w-full h-12 mt-space-sm bg-on-surface text-surface hover:bg-primary-container hover:text-on-surface transition-all duration-200 flex items-center justify-center gap-space-sm group shadow-md" id="submitBtn" type="submit">
<span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">{"ENTRAR A BYTEELEMENT"}</span>
<span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">{"arrow_forward"}</span>
</button>
<p role="status" aria-live="polite" className="text-primary mt-4">{message}</p></form>
<div className="flex flex-col gap-space-sm text-center pt-space-xs">
<p className="font-body-md text-body-md text-on-surface-variant">{"\n              ¿No tienes una cuenta aún? \n              "}<a className="font-label-caps text-label-caps uppercase text-primary hover:text-primary-container underline font-bold tracking-wide transition-colors ml-1" href="/registro">{"\n                Crear cuenta nueva\n              "}</a>
</p>
<div className="flex items-center justify-center gap-2 pt-space-sm text-secondary">
<span className="material-symbols-outlined text-[16px] text-primary">{"gpp_maybe"}</span>
<span className="font-label-mono text-caption uppercase tracking-wider text-secondary">{"\n                CIFRADO SSL DE 256 BITS • PROTOCOLO DE PROTECCIÓN DE HARDWARE\n              "}</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between text-on-surface-variant gap-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container"></span>
<span className="font-label-mono text-caption uppercase">{"NODO: SCL-01 // LATENCIA 12 MS"}</span>
</div>
<div className="flex items-center gap-space-md font-label-mono text-caption uppercase text-secondary">
<a className="hover:text-on-surface transition-colors" href="#informacion">{"TÉRMINOS"}</a>
<span >{"/"}</span>
<a className="hover:text-on-surface transition-colors" href="#informacion">{"PRIVACIDAD"}</a>
<span >{"/"}</span>
<a className="hover:text-on-surface transition-colors" href="#informacion">{"ESTADO DE API"}</a>
</div>
</div>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.03)] py-space-md"><div className="max-w-[1440px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm"><div className="flex items-center gap-space-lg flex-wrap"><div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-primary text-[16px]">{"lock"}</span><span className="font-label-mono text-caption uppercase text-on-surface-variant">{"CIFRADO TLS 1.3 / SSL ACTIVO"}</span></div><div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-secondary text-[16px]">{"verified"}</span><span className="font-label-mono text-caption uppercase text-on-surface-variant">{"COBERTURA DE GARANTÍA DE LABORATORIO POR 2 AÑOS"}</span></div><div className="flex items-center gap-space-xs"><span className="w-1.5 h-1.5 bg-primary-container"></span><span className="font-label-mono text-caption uppercase text-on-surface-variant">{"ID_SISTEMA: BE-904-LAB // DIAGNÓSTICO NORMAL"}</span></div></div><div className="font-label-mono text-caption uppercase text-on-surface-variant text-center md:text-right">{"© 2025 BYTEELEMENT SISTEMAS INFORMÁTICOS. TODOS LOS DERECHOS RESERVADOS."}</div></div></footer></div>)
}
