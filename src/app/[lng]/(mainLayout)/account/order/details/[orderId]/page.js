import OrderDetailsContain from "@/Components/Account/Orders/Details"
import ThankYouPage from "@/Components/ThankYou"

const OrderDetails = ({ params }) => {
    return (
        <>
            <ThankYouPage />
            {params?.orderId && <OrderDetailsContain params={params?.orderId} />}
        </>
    )
}

export default OrderDetails