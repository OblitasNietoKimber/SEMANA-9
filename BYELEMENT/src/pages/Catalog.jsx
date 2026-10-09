import StoreHeader from '../components/StoreHeader'
import StoreFooter from '../components/StoreFooter'
import ProductGrid from '../components/ProductGrid'

export default function Catalog() {
  return <><StoreHeader />
    <main className="pt-40 pb-space-xl px-margin bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-label-caps text-label-caps tracking-widest">HARDWARE DE PRECISIÓN // BYTEELEMENT</p>
        <h1 className="font-headline-xl text-headline-xl mt-3 mb-4">Catálogo de periféricos</h1>
        <p className="text-on-surface-variant mb-8 max-w-2xl">Teclados, ratones, monitores y audio para tu estación de trabajo y juego. Explora los equipos y sus especificaciones.</p>
        <ProductGrid />
      </div>
    </main><StoreFooter /></>
}
