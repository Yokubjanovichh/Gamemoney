import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutMain } from "./layout/main";
import { ReviewLayout } from "./layout/review";
import { Home } from "./pages/home/home";
import { Games } from "./pages/games/games";
import { Game } from "./pages/game/game";
import { Faq } from "./pages/faq/faq";
import { Reviews } from "./pages/reviews/reviews";
import { Doc } from "./pages/doc/doc";
import { Order } from "./pages/order/order";
const NotFound = memo(() => <h1>Not Found</h1>);

export const Router = memo(() => {
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="game/:id" element={<Game />} />
        <Route path="faq" element={<Faq />} />
        <Route path="doc" element={<Doc />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/reviews" element={<ReviewLayout />}>
        <Route index element={<Reviews />} />
      </Route>
    </Routes>
  );
});
