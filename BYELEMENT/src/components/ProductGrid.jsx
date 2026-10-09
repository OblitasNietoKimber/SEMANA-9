import { useMemo, useState } from 'react'
import { products } from '../data/products'

const categories = ['Todos', ...new Set(products.map((product) => product.category))]
const amount = (price) => Number(price.replace(/[^0-9]/g, ''))

export default function ProductGrid() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sort, setSort] = useState('default')
  const [selection, setSelection] = useState([])
  const [message, setMessage] = useState('')
  const filtered = useMemo(() => {
    const matches = products.filter((product) =>
      (category === 'Todos' || product.category === category) &&
      `${product.name} ${product.id}`.toLocaleLowerCase('es').includes(query.toLocaleLowerCase('es').trim()),
    )
    if (sort !== 'default') matches.sort((a, b) => (amount(a.price) - amount(b.price)) * (sort === 'ascending' ? 1 : -1))
    return matches
  }, [query, category, sort])

  function addProduct(product) {
    setSelection((items) => [...items, product])
    setMessage(`${product.name} añadido a la selección de esta vista.`)
  }

  return <div className="flex flex-col gap-space-lg">
    <div className="flex flex-col md:flex-row gap-space-md md:items-end justify-between">
      <label className="flex flex-col gap-2 flex-1 font-label-caps text-label-caps">BUSCAR HARDWARE
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre o código SKU" className="h-11 bg-white px-4 text-body-md font-body-md border border-outline-variant" />
      </label>
      <label className="flex flex-col gap-2 font-label-caps text-label-caps">ORDENAR POR
        <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-11 bg-white px-4 text-body-md font-body-md border border-outline-variant">
          <option value="default">Destacados</option><option value="ascending">Menor precio</option><option value="descending">Mayor precio</option>
        </select>
      </label>
    </div>
    <div className="flex flex-wrap gap-2" aria-label="Categorías de hardware">
      {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className="px-4 py-2 bg-surface-container-low font-label-caps text-label-caps">{item}</button>)}
    </div>
    <div className="flex flex-wrap justify-between gap-3 font-label-mono text-label-mono">
      <p role="status">{filtered.length} de {products.length} productos</p>
      <p>SELECCIÓN: {selection.length} {selection.length === 1 ? 'UNIDAD' : 'UNIDADES'}</p>
    </div>
    <p aria-live="polite" className="text-primary">{message}</p>
    {filtered.length === 0 && <div className="bg-white p-8"><p>No se encontraron productos.</p><button type="button" onClick={() => { setQuery(''); setCategory('Todos') }} className="mt-4 text-primary underline">Limpiar filtros</button></div>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
      {filtered.map((product) => <article key={product.id} className="bg-white p-space-md shadow-sm flex flex-col hover:shadow-md transition-shadow">
        <div className="relative bg-surface-container-low aspect-[4/3] overflow-hidden mb-space-md">
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <p className="font-label-mono text-label-mono text-secondary">SKU: {product.id}</p>
        <h3 className="font-headline-sm text-headline-sm mt-2">{product.name}</h3>
        <p className="text-body-sm text-on-surface-variant mt-2 flex-1">{product.description}</p>
        <div className="mt-space-md flex flex-wrap gap-2 items-center justify-between">
          <div><p className="line-through text-secondary text-caption">{product.previousPrice}</p><p className="text-primary font-headline-sm text-headline-sm">{product.price}</p></div>
          <button type="button" onClick={() => addProduct(product)} aria-label={`Agregar ${product.name}`} className="px-4 py-3 bg-on-background text-white hover:bg-primary text-label-caps font-label-caps flex gap-2 items-center"><span aria-hidden="true" className="material-symbols-outlined text-base">shopping_bag</span>AGREGAR</button>
        </div>
      </article>)}
    </div>
  </div>
}
