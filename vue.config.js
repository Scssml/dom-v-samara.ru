module.exports = {
  devServer: {
    proxy: 'http://dom-v-samara.seotest.tmweb.ru',
  },

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Строительство домов из газобетона и камня в Самарской области',
      description: 'Построим в срок от 3-х месяцев дом из газобетона или камня. Дадим гарантию на строительство - 5 лет. Геологию участка делаем в подарок.',
    },
  },
};
