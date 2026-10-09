import { useState } from 'react'
export default function Register() {
 const [password, setPassword] = useState('')
 const [interests, setInterests] = useState([])
 const [message, setMessage] = useState('')
 const strength = [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password), /[^a-zA-Z0-9]/.test(password)].filter(Boolean).length
 const strengthLabel = ['VACÍO', 'BAJO', 'MEDIO', 'ALTO', 'FUERTE'][strength]
 const toggleInterest = (interest) => setInterests((current) => current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest])
 function handleSubmit(event) {
   event.preventDefault()
   const data = new FormData(event.currentTarget)
   if (data.has('confirmarClave') && data.get('claveAcceso') !== data.get('confirmarClave')) {
     setMessage('Las contraseñas no coinciden.'); return
   }
   setMessage('Formulario validado. La autenticación real requiere conectar el backend.')
 }

return (<div className="bg-surface font-body-md text-body-md text-on-surface antialiased"><main className="w-full bg-surface min-h-screen flex flex-col justify-center items-center p-margin"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto py-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5 flex flex-col space-y-6">
<div className="bg-surface-container-lowest p-6 shadow-md relative overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary-container"></div>
<div className="flex items-center justify-between pb-4">
<span className="font-label-caps text-label-caps text-secondary tracking-widest">{"SERIE 01 // COMUNIDAD DE INGENIERÍA"}</span>
<span className="font-label-mono text-label-mono text-primary bg-primary-fixed/40 px-2 py-0.5 font-semibold">{"REV_SISTEMA: V4.2.0"}</span>
</div>
<div className="space-y-3 pt-2">
<h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">{"\n              Únete al Ecosistema ByteElement\n            "}</h1>
<p className="font-body-md text-body-md text-on-surface-variant">{"\n              Crea tu perfil de laboratorio para sincronizar configuraciones de hardware, perfiles de macros y seguimiento prioritario de periféricos.\n            "}</p>
</div>
<div className="mt-6 space-y-3">
<div className="bg-surface-container-low p-4 relative group transition-all duration-200 hover:bg-surface-container">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl mt-0.5">{"percent"}</span>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-on-surface">{"10% de Descuento de Bienvenida"}</h2>
<span className="font-label-mono text-[10px] bg-primary text-on-primary px-1.5 py-0.2">{"CUPÓN"}</span>
</div>
<p className="font-body-sm text-body-sm text-secondary mt-1">{"\n                    Cupón instantáneo para tu primer teclado o ratón personalizado de grado competitivo.\n                  "}</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-4 relative group transition-all duration-200 hover:bg-surface-container">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl mt-0.5">{"verified_user"}</span>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface">{"Garantía Oficial de Laboratorio por 2 Años"}</h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">{"\n                    Tramitación directa en banco de pruebas y sustitución sin intermediarios ni demoras.\n                  "}</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-4 relative group transition-all duration-200 hover:bg-surface-container">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl mt-0.5">{"cloud_sync"}</span>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface">{"Sincronización de Perfiles en la Nube"}</h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">{"\n                    Guarda tus capas de teclas, frecuencias de sondeo y mapas RGB en cualquier estación de trabajo.\n                  "}</p>
</div>
</div>
</div>
<div className="bg-surface-container-low p-4 relative group transition-all duration-200 hover:bg-surface-container">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-xl mt-0.5">{"notification_important"}</span>
<div className="min-w-0">
<h2 className="font-headline-sm text-headline-sm text-on-surface">{"Alertas de Lotes Limitados"}</h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">{"\n                    Acceso anticipado a interruptores mecánicos artesanales y chasis de aluminio fresado CNC.\n                  "}</p>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-5 bg-surface-container p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full bg-primary-container opacity-75"></span>
<span className="relative inline-flex h-3 w-3 bg-primary"></span>
</span>
<span className="font-label-mono text-label-mono text-on-surface font-semibold">{"TELEMETRÍA EN VIVO"}</span>
</div>
<span className="font-label-caps text-label-caps text-secondary">{"SERVIDOR: LATAM-01"}</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary font-bold">{"+45,000"}</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">{"estaciones de juego y trabajo sincronizadas"}</span>
</div>
<div className="mt-3 w-full bg-surface-container-highest h-1.5 overflow-hidden">
<div className="bg-primary-container h-full w-4/5"></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-6 shadow-md flex items-center gap-4">
<div className="w-20 h-20 bg-surface-container flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl">{"precision_manufacturing"}</span>
</div>
<div >
<span className="font-label-caps text-[10px] text-secondary tracking-widest">{"INGENIERÍA MODULAR"}</span>
<p className="font-body-sm text-body-sm text-on-surface mt-1 font-medium">{"\n              Cada cuenta de usuario se vincula a nuestra base de telemetría de tolerancias micro-mecánicas.\n            "}</p>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest p-8 shadow-xl relative">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-container to-tertiary"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-6">
<div >
<h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">{"Crear Cuenta"}</h2>
<p className="font-body-md text-body-md text-secondary mt-1">{"Ingresa tus datos para registrar tu estación de hardware"}</p>
</div>
<span className="font-label-mono text-label-mono text-secondary mt-2 sm:mt-0">{"[ FORM_ID: BE-REG-2025 ]"}</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
<button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low hover:bg-surface-container transition-all text-on-surface font-label-caps text-label-caps shadow-sm" type="button" onClick={() => setMessage("Este proveedor requiere conexión con el backend.")}>
<span className="material-symbols-outlined text-lg">{"sports_esports"}</span>
<span >{"STEAM"}</span>
</button>
<button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low hover:bg-surface-container transition-all text-on-surface font-label-caps text-label-caps shadow-sm" type="button" onClick={() => setMessage("Este proveedor requiere conexión con el backend.")}>
<span className="material-symbols-outlined text-lg">{"forum"}</span>
<span >{"DISCORD"}</span>
</button>
<button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low hover:bg-surface-container transition-all text-on-surface font-label-caps text-label-caps shadow-sm" type="button" onClick={() => setMessage("Este proveedor requiere conexión con el backend.")}>
<span className="material-symbols-outlined text-lg">{"public"}</span>
<span >{"GOOGLE"}</span>
</button>
</div>
<div className="relative flex py-2 items-center mb-6">
<div className="flex-grow bg-surface-container-highest h-px"></div>
<span className="flex-shrink mx-4 font-label-caps text-label-caps text-secondary uppercase tracking-widest bg-surface-container-lowest px-2">{"\n              O REGÍSTRATE CON TU CORREO\n            "}</span>
<div className="flex-grow bg-surface-container-highest h-px"></div>
</div>
<form className="space-y-5" id="registroForm" onSubmit={handleSubmit}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div >
<label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="nombreCompleto">{"\n                  NOMBRE COMPLETO "}<span className="text-error">{"*"}</span>
</label>
<div className="relative">
<input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="nombreCompleto" placeholder="Ej. Carlos Vega" required={true} type="text" name="nombreCompleto"/>
</div>
</div>
<div >
<label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="aliasJugador">{"\n                  IDENTIFICADOR / ALIAS "}<span className="text-secondary font-normal">{"(OPCIONAL)"}</span>
</label>
<div className="relative">
<input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="aliasJugador" placeholder="Ej. CyberKnight" type="text" name="aliasJugador"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div >
<label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="correoElectronico">{"\n                  CORREO ELECTRÓNICO "}<span className="text-error">{"*"}</span>
</label>
<input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="correoElectronico" placeholder="usuario@dominio.com" required={true} type="email" name="correoElectronico"/>
</div>
<div >
<label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="telefonoMovil">{"\n                  TELÉFONO MÓVIL "}<span className="text-secondary font-normal">{"(ALERTAS DE DESPACHO)"}</span>
</label>
<input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="telefonoMovil" placeholder="+56 9 1234 5678" type="tel" name="telefonoMovil"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div >
<div className="flex items-center justify-between mb-1">
<label className="font-label-caps text-label-caps text-on-surface" htmlFor="claveAcceso">{"\n                    CONTRASEÑA "}<span className="text-error">{"*"}</span>
</label>
<span className="font-label-mono text-caption">NIVEL: {strengthLabel}</span>
</div>
<input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="claveAcceso" placeholder="••••••••••••" required={true} type="password" name="claveAcceso" autoComplete="new-password" onChange={(event) => setPassword(event.target.value)} minLength={8}/>
<div className="grid grid-cols-4 gap-1 mt-2">
<div className="h-1 bg-surface-container-highest transition-all duration-300" id="barraSeguridad1" style={{ backgroundColor: strength >= 1 ? "#00677f" : "#d3e4fe" }}></div>
<div className="h-1 bg-surface-container-highest transition-all duration-300" id="barraSeguridad2" style={{ backgroundColor: strength >= 2 ? "#00677f" : "#d3e4fe" }}></div>
<div className="h-1 bg-surface-container-highest transition-all duration-300" id="barraSeguridad3" style={{ backgroundColor: strength >= 3 ? "#00677f" : "#d3e4fe" }}></div>
<div className="h-1 bg-surface-container-highest transition-all duration-300" id="barraSeguridad4" style={{ backgroundColor: strength >= 4 ? "#00677f" : "#d3e4fe" }}></div>
</div>
</div>
<div >
<label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="confirmarClave">{"\n                  CONFIRMAR CONTRASEÑA "}<span className="text-error">{"*"}</span>
</label>
<input className="w-full h-11 px-3 bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="confirmarClave" placeholder="••••••••••••" required={true} type="password" name="confirmarClave" autoComplete="new-password" minLength={8}/>
</div>
</div>
<div className="pt-2">
<label className="block font-label-caps text-label-caps text-on-surface mb-2">{"\n                INTERESES DE HARDWARE // PERFIL DE TELEMETRÍA:\n              "}</label>
<div className="flex flex-wrap gap-2" id="contenedorIntereses">
<button className="px-3 py-1.5 bg-surface-container-low text-secondary font-label-mono text-label-mono shadow-sm transition-colors hover:bg-surface-container" type="button" aria-pressed={interests.includes("TECLADOS MEC\u00c1NICOS")} onClick={() => toggleInterest("TECLADOS MEC\u00c1NICOS")}>{interests.includes("TECLADOS MEC\u00c1NICOS") ? "✓ " : "+ "}{"TECLADOS MEC\u00c1NICOS"}</button>
<button className="px-3 py-1.5 bg-surface-container-low text-secondary font-label-mono text-label-mono shadow-sm transition-colors hover:bg-surface-container" type="button" aria-pressed={interests.includes("RATONES ULTRALIGEROS")} onClick={() => toggleInterest("RATONES ULTRALIGEROS")}>{interests.includes("RATONES ULTRALIGEROS") ? "✓ " : "+ "}{"RATONES ULTRALIGEROS"}</button>
<button className="px-3 py-1.5 bg-surface-container-low text-secondary font-label-mono text-label-mono shadow-sm transition-colors hover:bg-surface-container" type="button" aria-pressed={interests.includes("MONITORES DE ALTA FRECUENCIA")} onClick={() => toggleInterest("MONITORES DE ALTA FRECUENCIA")}>{interests.includes("MONITORES DE ALTA FRECUENCIA") ? "✓ " : "+ "}{"MONITORES DE ALTA FRECUENCIA"}</button>
<button className="px-3 py-1.5 bg-surface-container-low text-secondary font-label-mono text-label-mono shadow-sm transition-colors hover:bg-surface-container" type="button" aria-pressed={interests.includes("AUDIO DE ESTUDIO")} onClick={() => toggleInterest("AUDIO DE ESTUDIO")}>{interests.includes("AUDIO DE ESTUDIO") ? "✓ " : "+ "}{"AUDIO DE ESTUDIO"}</button>
</div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer select-none">
<input className="mt-1 w-4 h-4 text-primary bg-surface-container-lowest rounded-none focus:ring-0 cursor-pointer" id="terminosCondiciones" required={true} type="checkbox" name="terminosCondiciones"/>
<span className="font-body-sm text-body-sm text-secondary">{"\n                  Acepto los "}<a className="text-on-surface underline font-medium hover:text-primary" href="#informacion">{"Términos del Servicio de Laboratorio"}</a>{" y reconozco haber leído la "}<a className="text-on-surface underline font-medium hover:text-primary" href="#informacion">{"Política de Privacidad de Datos de Hardware"}</a>{".\n                "}</span>
</label>
</div>
<div className="pt-3">
<button className="w-full py-4 px-6 bg-on-surface text-surface font-headline-sm text-headline-sm uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-200 hover:bg-primary hover:text-on-primary shadow-lg" type="submit">
<span >{"CREAR CUENTA Y OBTENER 10% DE DESCUENTO"}</span>
<span className="material-symbols-outlined text-primary-container">{"arrow_forward"}</span>
</button>
</div>
<div className="text-center pt-2">
<p className="font-body-md text-body-md text-secondary">{"\n                ¿Ya tienes una cuenta registrada? \n                "}<a className="text-primary font-semibold hover:underline" href="/login">{"Iniciar sesión aquí"}</a>
</p>
</div>
<p role="status" aria-live="polite" className="text-primary mt-4">{message}</p></form>
<div className="mt-8 pt-6 bg-surface-container-low p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">{"lock"}</span>
<span className="font-label-mono text-[11px] text-on-surface font-semibold tracking-wider">{"\n                CIFRADO SSL DE 256 BITS\n              "}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">{"shield_with_heart"}</span>
<span className="font-label-mono text-[11px] text-on-surface font-semibold tracking-wider">{"\n                PROTOCOLO DE PROTECCIÓN DE HARDWARE\n              "}</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-primary"></span>
<span className="font-label-mono text-[10px] text-secondary">{"ESTADO: SEGURO"}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main></div>)
}
