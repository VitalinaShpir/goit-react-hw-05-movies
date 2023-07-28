import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { HomePage } from "./HomePage/HomePage";
import { Movies } from "./Movies/Movies";

export const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='movies' element={<Movies />} />
      {/* <Route path='todo' element={<TodoPage />} />
      <Route path='todo/:todoId' element={<TodoDetails />} /> */}
      {/* <Route path='todo' element={<TodoPage />}>
        <Route path=':todoId' element={<TodoDetails />} />
      </Route>
      <Route path='products' element={<ProductsPage />} />
      <Route path='products/:id' element={<ProductsDetails />} /> */}
    </Route>
  </Routes>
  );
};


