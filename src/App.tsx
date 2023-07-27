import React from 'react'
import mainRoute from './Router/mainRoute'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Global/store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import {  QueryClient, QueryClientProvider  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
let persistor =persistStore(store)


let client = new QueryClient()

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={client}>
        <RouterProvider router={mainRoute}/>
        <ReactQueryDevtools/>
        </QueryClientProvider>
        </PersistGate>
      </Provider>
    
    </div>
  )
}

export default App