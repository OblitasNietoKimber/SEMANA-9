import StoreHeader from './components/StoreHeader'
import StoreFooter from './components/StoreFooter'
// Each feature contributes its own route module, so branches merge independently.
const modules = import.meta.glob('./pages/*.jsx', { eager: true })
const definitions = { Home: ['/', 'Inicio'], Login: ['/login', 'Iniciar sesión'], Register: ['/registro', 'Registro'], Catalog: ['/catalogo', 'Catálogo'], Promotions: ['/promociones', 'Promociones'] }
const routes = Object.entries(modules).map(([file, module]) => {
  const name = file.split('/').pop().replace('.jsx', '')
  const [path, label] = definitions[name]
  return { path, label, component: module.default }
})
export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const route = routes.find((item) => item.path === path)
  if (route) { const Page = route.component; return <Page /> }
  return <><StoreHeader /><main className="pt-40 px-margin max-w-7xl mx-auto min-h-screen"><h1 className="font-headline-lg text-headline-lg">ByteElement</h1><p className="mt-4">Esta pantalla se incorporará al integrar su rama de funcionalidad.</p><nav className="flex flex-wrap gap-6 mt-8">{routes.map((item) => <a className="text-primary underline" key={item.path} href={item.path}>{item.label}</a>)}</nav></main><StoreFooter /></>
}
