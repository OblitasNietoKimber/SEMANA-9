import { useState } from 'react'
import StoreHeader from '../components/StoreHeader'
import StoreFooter from '../components/StoreFooter'
export default function Home() {
 const [category, setCategory] = useState('Todos')
 const [message, setMessage] = useState('')
 const [added, setAdded] = useState([])
 function handleSubmit(event) {
   event.preventDefault()
   setMessage('Correo validado. La suscripción requiere conectar el servicio de boletines.')
 }


return (<><StoreHeader /><main className="w-full pt-28 bg-surface"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-low py-space-xs px-margin">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-space-xs text-primary font-bold">
<span className="w-2 h-2 bg-primary-container inline-block animate-pulse"></span>{"\n          PROTOCOLO DE DESPACHO INMEDIATO ACTIVO\n        "}</span>
<span className="hidden md:inline text-outline-variant">{"/"}</span>
<span className="hidden md:inline">{"CALIBRACIÓN UNITARIA DE SENSORES EN SANTIAGO"}</span>
</div>
<div className="flex items-center gap-space-lg">
<span className="text-on-surface">{"ÍNDICE DE CONFORMIDAD: 99.84%"}</span>
<span className="hidden sm:inline text-primary-container bg-on-background px-space-xs py-0.5 font-label-caps">{"LOTE LAB-2025-Q1"}</span>
</div>
</div>
</section>

<section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl px-margin">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">

<div className="lg:col-span-7 flex flex-col z-10">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container w-fit mb-space-md shadow-sm">
<span className="material-symbols-outlined text-primary text-[16px]">{"precision_manufacturing"}</span>
<span className="font-label-caps text-label-caps text-on-surface tracking-wider">{"HARDWARE DE ALTA FRECUENCIA // SERIE 2025"}</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-background tracking-tight mb-space-md">{"\n          Periféricos de Precisión Extrema para tu Estación de Trabajo y Juego.\n        "}</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg max-w-2xl">{"\n          Chasis de aluminio mecanizado CNC, interruptores mecánicos intercambiables en caliente y latencia menor a 0.5 ms certificada en laboratorio mediante instrumentación osciloscópica.\n        "}</p>

<div className="flex flex-wrap items-center gap-space-md mb-space-xl">
<a className="px-space-lg py-space-md bg-on-background text-surface-container-lowest font-label-caps text-label-caps uppercase flex items-center gap-space-sm hover:bg-primary hover:text-on-primary transition-all duration-150 shadow-md" data-path="catalogo-perifericos" href="/catalogo">
<span >{"EXPLORAR CATÁLOGO"}</span>
<span className="material-symbols-outlined text-[18px]">{"arrow_forward"}</span>
</a>
<a className="px-space-lg py-space-md bg-surface-container text-on-surface font-label-caps text-label-caps uppercase flex items-center gap-space-sm hover:bg-surface-container-high transition-colors shadow-sm" data-path="configurador" href="#informacion">
<span className="material-symbols-outlined text-[18px] text-primary">{"tune"}</span>
<span >{"CONFIGURADOR PERSONALIZADO"}</span>
</a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md bg-surface-container-low p-space-md shadow-sm">
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-background font-bold tracking-tight">{"< 0.5 ms"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{"LATENCIA BASE"}</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">{"8,000 Hz"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{"TASA DE SONDEO"}</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-background font-bold tracking-tight">{"100%"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{"MONTAJE EN JUNTA"}</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-tertiary font-bold tracking-tight">{"2 AÑOS"}</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">{"GARANTÍA TÉCNICA"}</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
<div className="relative bg-surface-container p-space-md shadow-xl overflow-hidden group">

<div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 blur-3xl pointer-events-none"></div>
<img alt="Periféricos de alta precisión ByteElement" className="w-full h-[420px] object-cover filter contrast-[1.02] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]" data-alt="Modern high performance mechanical keyboard milled from aerospace aluminum with pristine white keycaps alongside an ultralight honeycomb carbon mouse on an ultra clean white minimalist desk setup, soft clinical architectural lighting, subtle cyan LEDs glowing from the switch plates, 8k resolution industrial hardware photography" src="/images/0371e827c9a8f3c6.png"/>

<div className="absolute bottom-space-lg left-space-lg right-space-lg bg-surface-container-lowest/95 backdrop-blur-md p-space-md shadow-lg flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-3 h-3 bg-primary-container"></div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-background uppercase font-bold">{"ESTACIÓN PROTOTIPO ALPHA-01"}</span>
<span className="font-caption text-caption text-on-surface-variant">{"TELEMETRÍA ÓPTICA VERIFICADA EN BANCO"}</span>
</div>
</div>
<span className="font-label-mono text-label-mono text-primary font-bold">{"CALIBRADO"}</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl px-margin bg-surface">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
<div >
<div className="flex items-center gap-space-xs text-primary font-label-mono text-label-mono mb-space-xs">
<span className="material-symbols-outlined text-[16px]">{"grid_view"}</span>
<span >{"MÓDULOS DEL ECOSISTEMA"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-tight">{"\n            Categorías de Ingeniería Principal\n          "}</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">{"\n          Cada dispositivo responde a especificaciones industriales exactas, ensamblados con tolerancias micrométricas y materiales no degradables.\n        "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-200">
<div >
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"CAT-01 // INTERFAZ"}</span>
<span className="material-symbols-outlined text-primary text-[28px]">{"keyboard"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Teclados Mecánicos Personalizados\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Chasis monolítico en aluminio 6063, placa de montaje con amortiguación por junta elástica y teclas PBT de doble inyección térmica.\n            "}</p>
</div>
<div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md mt-space-md flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface">{"VER ESPECIFICACIONES"}</span>
<span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">{"arrow_forward"}</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-200">
<div >
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"CAT-02 // SENSORES"}</span>
<span className="material-symbols-outlined text-primary text-[28px]">{"mouse"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Ratones Ópticos Ultraligeros\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Masa reducida desde 39 gramos, sensor óptico de 32,000 DPI con seguimiento 1:1 y microinterruptores fotoeléctricos sin rebote físico.\n            "}</p>
</div>
<div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md mt-space-md flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface">{"VER MODELOS ÓPTICOS"}</span>
<span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">{"arrow_forward"}</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-200">
<div >
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"CAT-03 // PANELES"}</span>
<span className="material-symbols-outlined text-primary text-[28px]">{"monitor"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Monitores de Frecuencia Rápida\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Paneles OLED de 240 Hz a 540 Hz nativos, tiempo de respuesta de 0.03 ms gris a gris y cobertura calibrada del 99% DCI-P3.\n            "}</p>
</div>
<div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md mt-space-md flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface">{"EXPLORAR PANELES"}</span>
<span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">{"arrow_forward"}</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg shadow-md flex flex-col justify-between group hover:shadow-xl transition-shadow duration-200">
<div >
<div className="flex justify-between items-start mb-space-md">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"CAT-04 // ACÚSTICA"}</span>
<span className="material-symbols-outlined text-primary text-[28px]">{"headphones"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Audio y Acústica de Estudio\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Transductores magnéticos planares abiertos, respuesta plana certificada en cámara anecoica y micrófonos de condensador balanceados.\n            "}</p>
</div>
<div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg p-space-md mt-space-md flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface">{"AUDITORÍA SONORA"}</span>
<span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">{"arrow_forward"}</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl px-margin bg-surface-container-low">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col lg:flex-row lg:items-center justify-between pb-space-lg gap-space-md">
<div >
<div className="flex items-center gap-space-xs text-primary font-label-mono text-label-mono">
<span className="w-2 h-2 bg-primary"></span>
<span >{"INSPECCIÓN DE DISPOSITIVOS DESTACADOS"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background uppercase">{"\n            Novedades Calibradas en Laboratorio\n          "}</h2>
</div>

<div className="flex flex-wrap items-center gap-space-xs bg-surface-container p-1 shadow-inner">
<button className="px-space-md py-space-xs bg-on-background text-surface font-label-caps text-label-caps" type="button" onClick={() => setCategory("Todos")} aria-pressed={category === "Todos"}>{"\n            TODOS LOS EQUIPOS\n          "}</button>
<button className="px-space-md py-space-xs bg-transparent hover:bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button" onClick={() => setCategory("Teclados")} aria-pressed={category === "Teclados"}>{"\n            TECLADOS MECÁNICOS\n          "}</button>
<button className="px-space-md py-space-xs bg-transparent hover:bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button" onClick={() => setCategory("Ratones")} aria-pressed={category === "Ratones"}>{"\n            RATONES DE PRECISIÓN\n          "}</button>
<button className="px-space-md py-space-xs bg-transparent hover:bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button" onClick={() => setCategory("Monitores")} aria-pressed={category === "Monitores"}>{"\n            MONITORES\n          "}</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div style={{ display: category === "Todos" || category === "Teclados" ? undefined : "none" }} className="bg-surface-container-lowest p-space-md shadow-md flex flex-col justify-between group">
<div >
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"SERIE-087 // MEC-CNC"}</span>
<span className="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-space-xs py-0.5 font-bold">{"EN INVENTARIO"}</span>
</div>
<div className="relative bg-surface-container-low mb-space-md overflow-hidden p-space-md flex items-center justify-center">
<img alt="Teclado Mecánico ByteElement Apex 75" className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Technical studio photo of a silver CNC anodized aluminum 75 percent custom mechanical keyboard with white dye sub PBT keycaps, exposed brass weight bar, laboratory white background with clinical soft shadows" src="/images/ad6e516758e1e37b.png"/>
<span className="absolute top-2 left-2 font-label-mono text-caption bg-surface-container-lowest px-1 shadow-sm text-secondary">{"CHASIS 6063"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Teclado Mecánico ByteElement Apex 75\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Montaje por placas aisladas con espuma de porón, interruptores lineales lubricados de fábrica y conexión desmontable USB-C balanceada.\n            "}</p>

<div className="grid grid-cols-3 gap-1 bg-surface-container p-space-xs font-label-mono text-caption text-on-surface mb-space-md">
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"SONDEO"}</span>
<span >{"8,000 HZ"}</span>
</div>
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"PESO"}</span>
<span >{"1,680 G"}</span>
</div>
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"INTERRUPTOR"}</span>
<span >{"LINEAL 45G"}</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase">{"PRECIO FINAL"}</span>
<span className="font-headline-sm text-headline-sm text-on-background font-bold">{"$189.990 CLP"}</span>
</div>
<button className="px-space-md py-space-sm bg-on-background text-surface font-label-caps text-label-caps hover:bg-primary transition-colors flex items-center gap-space-xs shadow-sm" type="button" onClick={() => setAdded((items) => [...items, 0])}>
<span className="material-symbols-outlined text-[18px]">{"add_shopping_cart"}</span>
<span >{"AÑADIR A LA CANASTA"}</span>
</button>
</div>
</div>

<div style={{ display: category === "Todos" || category === "Ratones" ? undefined : "none" }} className="bg-surface-container-lowest p-space-md shadow-md flex flex-col justify-between group">
<div >
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"SERIE-039 // OPT-RES"}</span>
<span className="bg-surface-container text-on-surface font-label-caps text-label-caps px-space-xs py-0.5 font-bold">{"LOTE LIMITADO"}</span>
</div>
<div className="relative bg-surface-container-low mb-space-md overflow-hidden p-space-md flex items-center justify-center">
<img alt="Ratón Ultraligero HyperLight 39" className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300" data-alt="Ultralight magnesium alloy wireless gaming mouse with pure white and subtle cyan accents sitting on a calibrated scientific test bed with blue millimeter grid background" src="/images/6807565641657f9e.png"/>
<span className="absolute top-2 left-2 font-label-mono text-caption bg-surface-container-lowest px-1 shadow-sm text-secondary">{"MAGNESIO T6"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Ratón Óptico HyperLight 39 Magnesio\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Estructura esqueletizada en aleación de magnesio espacial, microinterruptores ópticos Gen-3 y deslizadores 100% PTFE virgen con radio curvo.\n            "}</p>

<div className="grid grid-cols-3 gap-1 bg-surface-container p-space-xs font-label-mono text-caption text-on-surface mb-space-md">
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"RESOLUCIÓN"}</span>
<span >{"32,000 DPI"}</span>
</div>
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"PESO NETO"}</span>
<span >{"39 GRAMOS"}</span>
</div>
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"SENSOR"}</span>
<span >{"PAW3395 PRO"}</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase">{"PRECIO FINAL"}</span>
<span className="font-headline-sm text-headline-sm text-on-background font-bold">{"$129.990 CLP"}</span>
</div>
<button className="px-space-md py-space-sm bg-on-background text-surface font-label-caps text-label-caps hover:bg-primary transition-colors flex items-center gap-space-xs shadow-sm" type="button" onClick={() => setAdded((items) => [...items, 1])}>
<span className="material-symbols-outlined text-[18px]">{"add_shopping_cart"}</span>
<span >{"AÑADIR A LA CANASTA"}</span>
</button>
</div>
</div>

<div style={{ display: category === "Todos" || category === "Monitores" ? undefined : "none" }} className="bg-surface-container-lowest p-space-md shadow-md flex flex-col justify-between group">
<div >
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<span className="font-label-mono text-label-mono text-on-surface-variant">{"SERIE-270 // OLED-QHD"}</span>
<span className="bg-primary-container text-on-primary-fixed font-label-caps text-label-caps px-space-xs py-0.5 font-bold">{"DISPONIBLE"}</span>
</div>
<div className="relative bg-surface-container-low mb-space-md overflow-hidden p-space-md flex items-center justify-center">
<img alt="Monitor OLED UltraVision 27" className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300" data-alt="27 inch ultra thin OLED technical monitor displaying sharp vector calibration diagrams on screen, matte metallic stand, clean laboratory setup with pure white background" src="/images/d9f1c5e1d1fefd36.png"/>
<span className="absolute top-2 left-2 font-label-mono text-caption bg-surface-container-lowest px-1 shadow-sm text-secondary">{"PANEL QD-OLED"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Monitor OLED UltraVision 27 Pulgadas\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{"\n              Frecuencia de actualización de 360 Hz nativa, calibración de color con certificación Delta-E inferior a 1.0 y disipador de grafeno integrado.\n            "}</p>

<div className="grid grid-cols-3 gap-1 bg-surface-container p-space-xs font-label-mono text-caption text-on-surface mb-space-md">
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"REFRESCO"}</span>
<span >{"360 HZ"}</span>
</div>
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"RESPUESTA"}</span>
<span >{"0.03 MS"}</span>
</div>
<div className="flex flex-col items-center text-center p-1 bg-surface-container-lowest">
<span className="text-on-surface-variant font-bold">{"PANEL"}</span>
<span >{"2560 X 1440"}</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase">{"PRECIO FINAL"}</span>
<span className="font-headline-sm text-headline-sm text-on-background font-bold">{"$689.990 CLP"}</span>
</div>
<button className="px-space-md py-space-sm bg-on-background text-surface font-label-caps text-label-caps hover:bg-primary transition-colors flex items-center gap-space-xs shadow-sm" type="button" onClick={() => setAdded((items) => [...items, 2])}>
<span className="material-symbols-outlined text-[18px]">{"add_shopping_cart"}</span>
<span >{"AÑADIR A LA CANASTA"}</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl px-margin bg-surface-container-lowest">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-space-xl">
<div className="flex items-center gap-space-xs text-primary font-label-mono text-label-mono mb-space-xs">
<span className="material-symbols-outlined text-[18px]">{"verified"}</span>
<span >{"ESTÁNDARES DE FABRICACIÓN Y RIGOR INDUSTRIAL"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-tight">{"\n          ¿Por qué Elegir la Ingeniería de ByteElement?\n        "}</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">{"\n          Eliminamos los adornos plásticos y el software inflado. Cada componente se evalúa de manera individual en bancos de prueba de precisión milimétrica antes de empaquetarse.\n        "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-between">
<div >
<div className="w-10 h-10 bg-on-background text-primary-container flex items-center justify-center mb-space-md font-bold">
<span className="material-symbols-outlined text-[24px]">{"biotech"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Calibración Individual en Laboratorio\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Cada ratón y teclado pasa por pruebas de osciloscopio para garantizar que la fluctuación de transmisión no exceda los 0.1 ms en ningún ciclo operativo.\n            "}</p>
</div>
<span className="font-label-mono text-caption text-primary font-bold mt-space-md">{"PROTOCOLO ISO-9001 COMPATIBLE"}</span>
</div>

<div className="bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-between">
<div >
<div className="w-10 h-10 bg-on-background text-primary-container flex items-center justify-center mb-space-md font-bold">
<span className="material-symbols-outlined text-[24px]">{"inventory_2"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Envíos Protegidos Anti-Impacto\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Embalaje técnico con espumas densas termomoldeadas a medida y bolsas antiestáticas blindadas para preservar los componentes electrónicos.\n            "}</p>
</div>
<span className="font-label-mono text-caption text-primary font-bold mt-space-md">{"PROTECCIÓN ESD COMPLETA"}</span>
</div>

<div className="bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-between">
<div >
<div className="w-10 h-10 bg-on-background text-primary-container flex items-center justify-center mb-space-md font-bold">
<span className="material-symbols-outlined text-[24px]">{"terminal"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Sin Telemetría Invasiva\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Microcódigo de código abierto y controlador local ligero. Sin cuentas forzadas en la nube, sin consumo de procesador en segundo plano.\n            "}</p>
</div>
<span className="font-label-mono text-caption text-primary font-bold mt-space-md">{"MEMORIA INTEGRADA DE 32 KB"}</span>
</div>

<div className="bg-surface-container-low p-space-lg shadow-sm flex flex-col justify-between">
<div >
<div className="w-10 h-10 bg-on-background text-primary-container flex items-center justify-center mb-space-md font-bold">
<span className="material-symbols-outlined text-[24px]">{"engineering"}</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-background mb-space-xs">{"\n              Soporte Técnico Directo por Ingenieros\n            "}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Respuestas reales de los mismos especialistas que ensamblan y afinan los equipos. Asesoría para selección de lubricación y desensamblaje.\n            "}</p>
</div>
<span className="font-label-mono text-caption text-primary font-bold mt-space-md">{"CANAL DE ATENCIÓN DIRECTA"}</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container py-space-lg px-margin">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 bg-on-background flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[28px]">{"speed"}</span>
</div>
<div >
<h4 className="font-headline-sm text-headline-sm text-on-background uppercase">{"\n            Centro de Diagnóstico y Telemetría en Vivo\n          "}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n            Prueba la tasa de sondeo y latencia de tu teclado o ratón actual directamente desde el navegador.\n          "}</p>
</div>
</div>
<a className="px-space-lg py-space-sm bg-on-background text-surface font-label-caps text-label-caps uppercase hover:bg-primary transition-colors flex items-center gap-space-xs" data-path="soporte-y-telemetria" href="#informacion">
<span >{"EJECUTAR PRUEBA DE TASA"}</span>
<span className="material-symbols-outlined text-[16px]">{"chevron_right"}</span>
</a>
</div>
</section>

<section className="w-full py-space-xl px-margin bg-surface-container-lowest">
<div className="max-w-7xl mx-auto bg-on-background text-surface p-space-xl shadow-xl relative overflow-hidden">

<div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/10 blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
<div className="lg:col-span-7 flex flex-col">
<div className="flex items-center gap-space-xs text-primary-fixed font-label-mono text-label-mono mb-space-xs">
<span className="w-2 h-2 bg-primary-container"></span>
<span >{"BOLETÍN DE INGENIERÍA // SIN CORREO BASURA"}</span>
</div>
<h2 className="font-headline-xl text-headline-xl text-surface uppercase tracking-tight mb-space-sm">{"\n            Recibe Acceso Prioritario a Nuevos Lotes de Fabricación.\n          "}</h2>
<p className="font-body-md text-body-md text-surface-container-high max-w-xl">{"\n            Inscríbete para ser notificado de lotes limitados de aluminio anodizado, interruptores experimentales y guías técnicas de optimización de latencia en estaciones de trabajo.\n          "}</p>
</div>
<div className="lg:col-span-5 flex flex-col gap-space-sm">
<form className="flex flex-col sm:flex-row gap-space-xs" onSubmit={handleSubmit}>
<input className="w-full h-11 px-space-md bg-surface text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm" placeholder="tu.correo@ingenieria.cl" required={true} type="email"/>
<button className="h-11 px-space-lg bg-primary-container text-on-primary-fixed font-label-caps text-label-caps uppercase font-bold hover:bg-white hover:text-on-background transition-colors whitespace-nowrap shadow-sm" type="submit">{"\n              REGISTRAR\n            "}</button>
<p role="status" aria-live="polite" className="text-primary mt-4">{message}</p></form>
<div className="flex items-center gap-space-xs text-caption font-label-mono text-surface-container-highest">
<span className="material-symbols-outlined text-[14px] text-primary-container">{"lock"}</span>
<span >{"DATOS ENCRIPTADOS Y PROTEGIDOS. NUNCA COMPARTIMOS TU INFORMACIÓN CON TERCEROS."}</span>
</div>
</div>
</div>
</div>
</section>
</div></main><p role="status" aria-live="polite" className="px-margin py-3 text-primary">{added.length > 0 ? `${added.length} productos añadidos a la selección de esta vista.` : ""}</p><StoreFooter /></>)
}
