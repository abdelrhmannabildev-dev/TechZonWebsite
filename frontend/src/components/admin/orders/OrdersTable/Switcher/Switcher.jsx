import { useState } from "react";
function Switcher({setStatusToChange , order, statusToChange}) {
    const status = order.status;
    const modes = ["pending", "delivered", "declined"];
    const orderId = order.id;
    const orderStatus = order.status;
    const [statusIndex, setStatusIndex] = useState(modes.indexOf(status));
    // console.log(order);
    const handleChange = (newIndex) => {
        const newStatus = modes[newIndex];

        setStatusToChange(prev => {
            if (newStatus === order.status) {
                return prev.filter(item => item.orderId !== orderId);
            }

            const exists = prev.find(item => item.orderId === orderId);

            if (exists) {
                return prev.map(item =>
                    item.orderId === orderId
                        ? { ...item, status: newStatus }
                        : item
                );
            }

            return [
                ...prev,
                {
                    orderId,
                    status: newStatus
                }
            ];
        });
    };
    const prev = () => {
        const newIndex = statusIndex === 0 ? modes.length - 1 : statusIndex - 1
        setStatusIndex(newIndex);
        
        handleChange(newIndex);
    };

        const next = () => {
            const newIndex =
                statusIndex === modes.length - 1
                    ? 0
                    : statusIndex + 1;

            setStatusIndex(newIndex);

            handleChange(newIndex); 
        };

  return (
    <div className="switcher">

        <button onClick={prev}>◀</button>
        <span>{modes[statusIndex]}</span>
        <button onClick={next}>▶</button>

    </div>  
  )
}

export default Switcher