import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   facts: [
      {
         id: 100,
         title: 'Прообразом Чубакки стал пёс режиссёра',
      },
      {
         id: 101,
         title: 'Актёрам разрешили подобрать любимый цвет для своих световых мечей',
      },
      {
         id: 102,
         title: 'Джордж Лукас отомстил президенту, назвав в его честь персонажа',
      },
      {
         id: 103,
         title: 'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
      },
      {
         id: 104,
         title: 'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
      },
      {
         id: 105,
         title: 'Языки инопланетян имеют земное происхождение',
      },
      {
         id: 106,
         title: 'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок',
      },
      {
         id: 107,
         title: 'Люк Скайуокер мог быть девочкой',
      },
      {
         id: 108,
         title: 'Cъемочная группа чуть не вызвала международный конфликт',
      },
      {
         id: 109,
         title: 'Космические корабли во время съемок не двигались',
      },
   ],
   displayed: [],
};

const factsSlice = createSlice({
   name: 'facts',
   initialState,
   reducers: {
      show: (state, action) => {
         const count = action.payload;
         state.displayed = state.facts.slice(0, count);
      },
   },
});

export default factsSlice.reducer;
export const { show } = factsSlice.actions;
