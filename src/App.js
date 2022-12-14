import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfoContext } from "./InfoContext";
import GlobalStyle from "./style/GlobalStyle";
import PageHome from "./PageHome";
import PageProduct from "./PageProduct";
import PageLogin from "./PageLogin";
import PageRegister from "./PageRegister";
import PageCart from "./PageCart";
import PageCheckout from "./PageCheckout";
import PageThanks from "./PageThanks";

export default function App() {

  return (
    <InfoContext.Provider value={{}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/product" element={<PageProduct />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/cart" element={<PageCart />} />
          <Route path="/checkout" element={<PageCheckout />} />
          <Route path="/thanks" element={<PageThanks />} />
        </Routes>
      </BrowserRouter>
    </InfoContext.Provider>
  )
};