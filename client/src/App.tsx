import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

const queryClient = new QueryClient();

function App() {

   return (
      <QueryClientProvider client={ queryClient }>
         <div className='main'>
            <Header />
            <TodoContainer />
         </div>
      </QueryClientProvider>
   )

}

export default App;