const cocotin = {
  id: 282710981,
  first_name: 'cocotin',
  last_name: '',
  username: 'famzayka',
  language_code: 'ru',
  is_premium: true,
  allows_write_to_pm: true,
  photo_url: 'https://t.me/i/userpic/320/U1OSuwNctoCUVLFXr2QdQrf7_q3y-T_2EV7zvflhE_Q.svg'
}

export function useTelegram(){
  const tg = window.Telegram.WebApp

  return {
    tg,
    user: tg.initDataUnsafe?.user ?? cocotin
  }
}