import { Button } from "./components/Button.tsx";

export function App() {
  return (
    <>
      <h1>Hi</h1>
      <div>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button />
      </div>
    </>
  );
}
