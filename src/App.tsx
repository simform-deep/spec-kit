import { SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "./components/theme-provider"
import { Button } from "./components/ui/button"

export function App() {
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
  }

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button
            className="mt-2 hover:cursor-pointer"
            onClick={handleThemeToggle}
          >
            Theme {theme === "dark" ? <MoonIcon /> : <SunIcon />}{" "}
            {theme === "dark" ? "Dark" : "Light"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
