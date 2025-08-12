import {Row, Col} from 'react-bootstrap';
import p1 from '../../../assets/paymentMethods/1.png';
import p2 from '../../../assets/paymentMethods/2.png';
import p3 from '../../../assets/paymentMethods/3.png';
import p4 from '../../../assets/paymentMethods/4.png';
import p5 from '../../../assets/paymentMethods/5.png';
import p6 from '../../../assets/paymentMethods/6.png';
import p7 from '../../../assets/paymentMethods/7.png';
import p8 from '../../../assets/paymentMethods/8.png';
import p9 from '../../../assets/paymentMethods/9.png';
import verification from '../../../assets/paymentMethods/verification.png';

const paymentImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

function PaymentMethods()
{
    return(
        <>
         <Col>
            <h6 style={{color: "#3b3b3bff"}}>Payment Methods</h6>
            <div>
                {paymentImages.map((img, index) => (
                        <img key={index} src={img} style={{ height: "30px" , padding: "2px"}} />
                ))}
            </div>
         </Col>
         <Col>
            <h6 style={{color: "#3b3b3bff"}}>Verified By</h6>
            <img src={verification} alt="Verified by" style={{height:"30px"}} />
         </Col>
        </>
    )
}
export default PaymentMethods;