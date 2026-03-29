import { useMediaQuery } from '@mui/material';

export default function SELPHY_CP1500() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return <>
        <img src="http://image.kr.canon/namo/binary/20221118122057190_G0SAI1OJ.jpg" alt="" style={{ verticalAlign: "top", border: '0px solid rgb(0, 0, 0)' }} width="98%"></img>
        {isMobile ? <>
            {/* 모바일일 때 */}
            <iframe width="98%" height="500px" src="https://www.youtube.com/embed/SPgDvyg9CY4" title="YouTube video player" frameBorder="0"  ></iframe>
        </> : <>
            {/* pc 환경일 때 */}
            <iframe width="98%" height="700px" src="https://www.youtube.com/embed/SPgDvyg9CY4" title="YouTube video player" frameBorder="0"  ></iframe>

        </>}

        <div className="detail-item">
            <p><img src="http://image.kr.canon/namo/binary/20230621003507138_7E95I0BA.jpg" alt="" width="98%" />
                <a href="https://kr.canon/support/mobileApp/canonPrintSelphy" target="_blank" rel="noreferrer" style={{ fontSize: '13.3333px' }}>
                    <img src="http://image.kr.canon/namo/binary/20221118121452287_HYT3MLRN.jpg" alt="" width="98%" />
                </a>
                <a href="https://kr.canon/support/mobileApp/spPhotoLayout" target="_blank" rel="noreferrer" style={{ fontSize: '13.3333px' }}>
                    <img src="http://image.kr.canon/namo/binary/20221118121506761_QCFWE74E.jpg" alt="" width="98%" />
                </a>
                <img src="http://image.kr.canon/namo/binary/20221118121521690_962BZFXJ.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121531691_2J4CSC0Y.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121540450_RL9SXTWQ.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121545839_V6HXIZBJ.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121552779_E75W8NU4.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121558891_HEAV21UT.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121605241_IEGJR670.jpg" alt="" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121611818_XM0QSR6Z.jpg" alt="" width="98%" />
            </p>
        </div>

    </>
}
