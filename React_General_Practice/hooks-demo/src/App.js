import { CountContextProvider } from "./context/CountContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import UseContext from "./hooks/UseContext";
import UseEffect, { UseEffectDemo2 } from "./hooks/UseEffect";
import { UseMemo } from "./hooks/UseMemo";
import {
  FirstComponent,
  SecondComponent,
  UseReducer,
} from "./hooks/UseReducer";
import { UseRef } from "./hooks/UseRef";
import { UseState } from "./hooks/UseState";

function App() {
  return (
    <ThemeContextProvider>
      <CountContextProvider>
        <div>
          {/* <UseState /> */}
          {/* <UseEffect /> */}
          {/* <UseRef /> */}
          {/* <UseEffectDemo2 /> */}
          {/* <UseMemo /> */}
          {/* <UseContext /> */}
          {/* <UseReducer /> */}
          <FirstComponent />
          <SecondComponent />
        </div>
      </CountContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
