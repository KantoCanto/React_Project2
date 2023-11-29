import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button.tsx'
import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hi</h1>
      <div>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
