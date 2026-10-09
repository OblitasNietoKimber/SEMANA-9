import { useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import StoreHeader from '../components/StoreHeader'
import StoreFooter from '../components/StoreFooter'
export default function Promotions() {
 const [filter, setFilter] = useState('Todos los descuentos')
 const [message, setMessage] = useState('')


return (<><StoreHeader /><main className="w-full pt-28 bg-surface"><div className="flex flex-col w-full">

<section className="w-full bg-surface-container-lowest px-margin py-space-xl relative overflow-hidden shadow-sm">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">

<div className="flex flex-wrap items-center justify-between gap-space-md bg-surface-container-low p-space-sm">
<div className="flex items-center gap-space-sm font-label-mono text-label-mono text-primary font-bold">
<span className="w-2.5 h-2.5 bg-primary-container inline-block shadow-[0_0_8px_#00d2ff]"></span>
<span >{"PROTOCOLO PROMOCIONAL // LIQUIDACIÓN DE LABORATORIO // LOTES DE TEMPORADA"}</span>
</div>
<div className="flex items-center gap-space-md font-label-mono text-label-mono text-on-surface-variant">
<span className="hidden sm:inline">{"ALMACÉN: VALPARAÍSO - BAHÍA D"}</span>
<span className="text-secondary-fixed-dim">{"|"}</span>
<span className="text-on-surface font-semibold">{"TARIFA CON IVA DESGLOSADO"}</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
<div className="lg:col-span-8 flex flex-col gap-space-xs">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">{"CICLO DE RENOVACIÓN DE HARDWARE 2025.Q2"}</span>
<h1 className="font-headline-xl text-headline-xl text-on-background tracking-tight">{"\n            Promociones y Descuentos en Hardware de Rendimiento\n          "}</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-xs">{"\n            Aprovecha precios especiales en periféricos de alta gama, paquetes para estaciones completas y unidades de exhibición certificadas con calibración técnica y garantía de laboratorio íntegra.\n          "}</p>
</div>

<div className="lg:col-span-4 bg-on-background text-surface p-space-md shadow-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between font-label-caps text-label-caps text-primary-container">
<span className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px]">{"timer"}</span>{"\n              CRONÓMETRO DE VIGENCIA\n            "}</span>
<span className="text-secondary-fixed-dim">{"LOTE #L-894"}</span>
</div>
<div className="font-label-mono text-headline-sm text-surface tracking-wider py-space-xs font-bold" id="contador-vivo">{"\n            CONSULTA LA VIGENCIA DE LAS OFERTAS\n          "}</div>
<div className="w-full bg-surface-container-variant/30 h-1 relative overflow-hidden">
<div className="h-full bg-primary-container w-3/4 animate-pulse"></div>
</div>
<span className="font-caption text-caption text-secondary-fixed-dim">{"Precios bloqueados automáticamente hasta agotamiento de serie."}</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-space-xs pt-space-sm" id="filtros-promociones">
<button className="px-space-md py-space-sm bg-on-background text-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-primary-container hover:text-on-background" type="button" onClick={() => setFilter("Todos los descuentos")} aria-pressed={filter === "Todos los descuentos"}>{"\n          Todos los descuentos\n        "}</button>
<button className="px-space-md py-space-sm bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-surface-container" type="button" onClick={() => setFilter("Descuento 20% o más")} aria-pressed={filter === "Descuento 20% o más"}>{"\n          Descuento 20% o más\n        "}</button>
<button className="px-space-md py-space-sm bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-surface-container" type="button" onClick={() => setFilter("Paquetes Completos")} aria-pressed={filter === "Paquetes Completos"}>{"\n          Paquetes Completos\n        "}</button>
<button className="px-space-md py-space-sm bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-surface-container" type="button" onClick={() => setFilter("Teclados")} aria-pressed={filter === "Teclados"}>{"\n          Teclados\n        "}</button>
<button className="px-space-md py-space-sm bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-surface-container" type="button" onClick={() => setFilter("Ratones")} aria-pressed={filter === "Ratones"}>{"\n          Ratones\n        "}</button>
<button className="px-space-md py-space-sm bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-surface-container" type="button" onClick={() => setFilter("Audio")} aria-pressed={filter === "Audio"}>{"\n          Audio\n        "}</button>
<button className="px-space-md py-space-sm bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase transition-colors hover:bg-surface-container" type="button" onClick={() => setFilter("Monitores")} aria-pressed={filter === "Monitores"}>{"\n          Monitores\n        "}</button>
</div>
</div>
</section>

<section style={{ display: ["Todos los descuentos", "Paquetes Completos", "Descuento 20% o más"].includes(filter) ? undefined : "none" }} className="w-full px-margin py-space-lg bg-surface">
<div className="max-w-7xl mx-auto bg-surface-container-lowest p-space-lg md:p-space-xl shadow-lg relative overflow-hidden">

<div className="absolute top-0 left-0 w-2 h-full bg-primary-container"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-6 relative">
<div className="absolute -top-3 -left-3 bg-on-background text-primary-container font-label-mono text-label-mono px-space-sm py-0.5 z-10 font-bold shadow-sm">{"\n            PAQUETE MAESTRO // SERIE 01\n          "}</div>
<div className="relative bg-surface-container-low p-space-md overflow-hidden aspect-[16/10] flex items-center justify-center">
<img className="w-full h-full object-cover object-center shadow-sm" data-alt="Modern high performance mechanical white chassis gaming keyboard with cyan keycap legends alongside an ultra lightweight ergonomic white mouse and dark precision mousepad arranged neatly on a crisp clean laboratory bench with clinical lighting" src="/images/f90980f75528c52e.png" alt="Modern high performance mechanical white chassis gaming keyboard with cyan keycap legends alongside an ultra lightweight ergonomic white mouse and dark precision mousepad arranged neatly on a crisp clean laboratory bench with clinical lighting"/>
</div>
<div className="mt-space-xs grid grid-cols-3 gap-space-xs font-label-mono text-caption text-on-surface-variant text-center">
<div className="bg-surface-container-low p-space-xs">{"LATENCIA 0.125 MS"}</div>
<div className="bg-surface-container-low p-space-xs">{"PESO RATÓN: 49G"}</div>
<div className="bg-surface-container-low p-space-xs">{"BASE 900x400 MM"}</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col justify-between h-full gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-0.5 bg-primary-container text-on-primary-fixed font-label-caps text-label-caps font-bold">{"\n                AHORRO DEL 25%\n              "}</span>
<span className="font-label-mono text-label-mono text-on-surface-variant">{"LOTE DE EDICIÓN LIMITADA: 18 UNIDADES RESTANTES"}</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background uppercase tracking-tight mt-space-xs">{"\n              PAQUETE ESTACIÓN COMPETITIVA SERIE 01\n            "}</h2>
<p className="font-body-md text-body-md text-on-surface-variant">{"\n              Integración completa para jugadores profesionales de deportes electrónicos. Combina el rendimiento de microcódigo con latencias nulas y máxima consistencia cinemática.\n            "}</p>

<div className="mt-space-sm flex flex-col gap-space-xs bg-surface-container-low p-space-md">
<span className="font-label-caps text-label-caps text-on-surface font-bold">{"COMPONENTES INTEGRADOS:"}</span>
<ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-space-sm">
<span className="w-1.5 h-1.5 bg-primary-container"></span>
<span className="font-bold text-on-surface">{"Teclado Chasis MK-80:"}</span>{" Mecánico, conmutadores ópticos lineales prelubricados de fábrica.\n                "}</li>
<li className="flex items-center gap-space-sm">
<span className="w-1.5 h-1.5 bg-primary-container"></span>
<span className="font-bold text-on-surface">{"Ratón Ultraligero 8000 Hz:"}</span>{" Sensor de 26,000 DPI con tasa de sondeo ultra-alta sin retraso.\n                "}</li>
<li className="flex items-center gap-space-sm">
<span className="w-1.5 h-1.5 bg-primary-container"></span>
<span className="font-bold text-on-surface">{"Alfombrilla de Tela Cordura de Precisión:"}</span>{" Microtejido hidrofóbico con bordes cosidos al ras.\n                "}</li>
</ul>
</div>
</div>

<div className="pt-space-md flex flex-wrap items-center justify-between gap-space-md">
<div className="flex flex-col">
<span className="font-label-mono text-label-mono text-secondary line-through">{"PRECIO REGULAR: $289.990 CLP"}</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">{"$217.490"}</span>
<span className="font-label-mono text-label-mono text-on-surface-variant">{"CLP"}</span>
</div>
</div>
<button className="px-space-xl py-space-md bg-on-background text-surface font-label-caps text-label-caps uppercase font-bold tracking-wider hover:bg-primary-container hover:text-on-background transition-colors flex items-center gap-space-sm shadow-md" type="button" onClick={() => setMessage("Paquete añadido a la selección de esta vista.")}>
<span className="material-symbols-outlined text-[18px]">{"add_shopping_cart"}</span>
<span >{"OBTENER PAQUETE PROMOCIONAL"}</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section style={{ display: filter === "Paquetes Completos" ? "none" : undefined }} className="w-full px-margin py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-wrap items-end justify-between gap-space-md">
<div >
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">{"CATÁLOGO EN LIQUIDACIÓN"}</span>
<h3 className="font-headline-lg text-headline-lg text-on-background">{"Periféricos Individuales en Descuento"}</h3>
</div>
<div className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary">{"filter_alt"}</span>
<span >{"MOSTRANDO 6 UNIDADES CON DISPONIBILIDAD INMEDIATA"}</span>
</div>
</div>

<ProductGrid promotionFilter={filter} />
</div>
</section>

<section className="w-full px-margin py-space-xl bg-surface-container-lowest">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs text-center items-center">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">{"ESTÁNDAR BYTELEMENT"}</span>
<h3 className="font-headline-lg text-headline-lg text-on-background">{"Garantías Directas de Laboratorio"}</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">{"\n          Nuestras ofertas de liquidación no sacrifican soporte ni fiabilidad operativa. Todas las unidades son verificadas antes de su despacho.\n        "}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="bg-surface-container-low p-space-lg flex flex-col gap-space-sm">
<div className="w-12 h-12 bg-on-background text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">{"verified"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">{"2 AÑOS DE GARANTÍA COMPLETA"}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Misma cobertura técnica de laboratorio en todos los productos rebajados. Reemplazo inmediato en caso de desviación en tolerancia de microcódigo.\n            "}</p>
</div>
<div className="mt-auto pt-space-xs font-label-mono text-caption text-primary font-bold">{"\n            PROTOCOLO ISO-9001 CERTIFICADO\n          "}</div>
</div>

<div className="bg-surface-container-low p-space-lg flex flex-col gap-space-sm">
<div className="w-12 h-12 bg-on-background text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">{"local_shipping"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">{"ENVÍO GRATUITO PRIORITARIO"}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Despacho sin costo a todo el territorio nacional en pedidos superiores a $50.000 CLP. Empaque térmico antiestático reforzado.\n            "}</p>
</div>
<div className="mt-auto pt-space-xs font-label-mono text-caption text-primary font-bold">{"\n            SEGUIMIENTO VÍA GPS EN VIVO\n          "}</div>
</div>

<div className="bg-surface-container-low p-space-lg flex flex-col gap-space-sm">
<div className="w-12 h-12 bg-on-background text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">{"assignment_return"}</span>
</div>
<div className="flex flex-col gap-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">{"DEVOLUCIÓN DE 30 DÍAS"}</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">{"\n              Prueba tu equipo en tu propia estación de juego. Si la ergonomía o la tasa de sondeo no cumplen tus exigencias, te devolvemos el total de tu compra.\n            "}</p>
</div>
<div className="mt-auto pt-space-xs font-label-mono text-caption text-primary font-bold">{"\n            SIN COBRO POR RETIRO TÉCNICO\n          "}</div>
</div>
</div>

<div className="mt-space-md p-space-md bg-on-background text-surface flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<span className="material-symbols-outlined text-primary-container text-[32px]">{"contact_support"}</span>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm">{"¿Dudas con la compatibilidad de switches o firmware?"}</span>
<span className="font-body-sm text-body-sm text-secondary-fixed-dim">{"Nuestros ingenieros de hardware están disponibles en canal directo para asesoría técnica."}</span>
</div>
</div>
<a className="px-space-lg py-space-sm bg-primary-container text-on-background font-label-caps text-label-caps uppercase font-bold hover:bg-surface hover:text-on-background transition-colors whitespace-nowrap" data-path="soporte-y-telemetria" href="#informacion">{"\n          CONSULTAR A UN ESPECIALISTA\n        "}</a>
</div>
</div>
</section>


</div></main><p role="status" aria-live="polite" className="px-margin py-3 text-primary">{message}</p><StoreFooter /></>)
}
