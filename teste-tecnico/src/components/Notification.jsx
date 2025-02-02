
import { ToastContainer} from 'react-toastify';

function Notification(){
    return (
    <div className='z-10'>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
          />
    </div>
)
}

export default Notification