import { useMediaQuery } from '@mui/material';

export default function SELPHY_SQUARE_QX10() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return <>
        <img src="http://image.kr.canon/namo/binary/20221118122057190_G0SAI1OJ.jpg" alt="" style={{ verticalAlign: "top", border: '0px solid rgb(0, 0, 0)' }} width="98%"></img>

        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_01.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection "><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_02.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection prdVideo video01">
            {isMobile ? <>
                {/* 모바일일 때 */}
                <iframe width="98%" height="500px" src="https://www.youtube.com/embed/RHbp0MfjK6Y?rel=0" title="YouTube video player" frameBorder="0"  ></iframe>
            </> : <>
                {/* pc 환경일 때 */}
                <iframe width="98%" height="700px" src="https://www.youtube.com/embed/RHbp0MfjK6Y?rel=0" title="YouTube video player" frameBorder="0" ></iframe>

            </>}
        </div>
        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_04.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_05.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_06.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_07.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_08.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection"><img
            src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_13_v3.jpg"
            alt=""
            width="98%" /></div>
        <div className="prdSection">
            <a href="https://kr.canon/support/mobileApp/spPhotoLayout">
                <img src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_14_v4.jpg"
                    alt=""
                    width="98%" />
            </a>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_09.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_10.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_11.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img1_12.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_11.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_12.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_13.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_14.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_15.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_16.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_17.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_18.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_19.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_20.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_21.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_22.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_23.jpg"
                alt=""
                width="98%" /></div>
            <div className="prdSection"><img
                src="https://image.kr.canon/pds/editor/upload/product/accessory/EC815/img2_24.jpg"
                alt=""
                width="98%" /></div>
        </div >

    </>
}
