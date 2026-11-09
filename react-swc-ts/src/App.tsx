import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/img/icons/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>Autoprefixer CSS Properties Table</h1>
      <table>
        <thead>
          <tr>
            <th>CSS-свойство</th>
            <th>Префиксы, которые будут добавляться</th>
            <th>Пояснение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>display: flex</code>
            </td>
            <td>
              <code>-webkit-box</code>, <code>-webkit-flex</code>,{' '}
              <code>flex</code>
            </td>
            <td>
              Старые Safari и Chrome для последних 3 версий; <code>-ms-</code>{' '}
              не добавляется (IE исключён)
            </td>
          </tr>
          <tr>
            <td>
              <code>justify-content</code>
            </td>
            <td>
              только современный <code>justify-content</code>
            </td>
            <td>Flexbox старых IE не нужен</td>
          </tr>
          <tr>
            <td>
              <code>align-items</code>
            </td>
            <td>
              только современный <code>align-items</code>
            </td>
            <td>IE исключён</td>
          </tr>
          <tr>
            <td>
              <code>align-self</code>
            </td>
            <td>
              только современный <code>align-self</code>
            </td>
            <td>IE исключён</td>
          </tr>
          <tr>
            <td>
              <code>display: grid</code>
            </td>
            <td>
              <code>grid</code>
            </td>
            <td>
              IE (<code>-ms-grid</code>) исключён, современные браузеры
              поддерживают стандартный синтаксис
            </td>
          </tr>
          <tr>
            <td>
              <code>grid-template-columns</code>
            </td>
            <td>
              <code>grid-template-columns</code>
            </td>
            <td>Только стандартный синтаксис</td>
          </tr>
          <tr>
            <td>
              <code>user-select</code>
            </td>
            <td>
              <code>-webkit-user-select</code>, <code>-moz-user-select</code>,{' '}
              <code>user-select</code>
            </td>
            <td>Для Safari и Firefox последних 3 версий</td>
          </tr>
          <tr>
            <td>
              <code>appearance</code>
            </td>
            <td>
              <code>-webkit-appearance</code>, <code>appearance</code>
            </td>
            <td>Safari/Chrome</td>
          </tr>
          <tr>
            <td>
              <code>transition</code>
            </td>
            <td>
              <code>-webkit-transition</code>, <code>transition</code>
            </td>
            <td>Safari старых версий</td>
          </tr>
          <tr>
            <td>
              <code>transform</code>
            </td>
            <td>
              <code>-webkit-transform</code>, <code>transform</code>
            </td>
            <td>Safari старых версий</td>
          </tr>
          <tr>
            <td>
              <code>backdrop-filter</code>
            </td>
            <td>
              <code>-webkit-backdrop-filter</code>, <code>backdrop-filter</code>
            </td>
            <td>
              Safari последние версии поддерживают <code>-webkit-</code>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
