const urlBase64ToUint8Array = (base64String) => {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
const publicKey = 'BHh5reWDh2PEM9tXs93KJvRRPf74B7Nu9a6kFXm8q7K8Xwx5qizUPf9I-UpKgAPbZCd3axoQzhWwBC40Pw8b_ck'
const uri = "https://pobeda75.online"
const convertVapidKey = urlBase64ToUint8Array(publicKey)

const sendSubscribe = subscribe => {
  return fetch(`${uri}/notifications/subscribe`, {
    method: 'POST',
    body: JSON.stringify(subscribe),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const subscribeUser = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready
    try {
      if (!registration.pushManager) {
        console.log('Пуш уведомления не активны!')
        return
      }
      const existedSubscribe = await registration.pushManager.getSubscription()
      if (existedSubscribe === null) {
        console.log('Подписка не активирована, создаю запрос...')
        const newSubscribe = await registration.pushManager.subscribe({
          applicationServerKey: convertVapidKey,
          userVisibleOnly: true
        })
        try {
          console.log('Добавлена новая подписка...')
          sendSubscribe(newSubscribe)
        } catch (err) {
          if (Notification.permission !== 'granted') {
            console.log('Разрешение не было предоставленно')
          } else {
            console.log('В процессе подписки произошла ошибка!', err)
          }
        }
      } else {
        console.log('Обнаружена существующая подписка!')
        sendSubscribe(existedSubscribe)
      }
    } catch (err) {
      console.log('Произошла ошибка при регистрации сервисного работника!!!', err)
    }
  }
}