import { useMediaQuery } from '@mui/material';

export default function SELPHY_CP1500() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return <>
        <img src="http://image.kr.canon/namo/binary/20221118122057190_G0SAI1OJ.jpg" style={{ verticalAlign: "top", border: '0px solid rgb(0, 0, 0)' }} width="98%"></img>
        {isMobile ? <>
            {/* 모바일일 때 */}
            <iframe width="98%" height="500px" src="https://www.youtube.com/embed/SPgDvyg9CY4" title="YouTube video player" frameborder="0"  ></iframe>
        </> : <>
            {/* pc 환경일 때 */}
            <iframe width="98%" height="700px" src="https://www.youtube.com/embed/SPgDvyg9CY4" title="YouTube video player" frameborder="0"  ></iframe>

        </>}

        <div class="detail-item">
            <p><img src="http://image.kr.canon/namo/binary/20221118121444989_5A2HT1TD.jpg" width="98%" />
                <a href="https://kr.canon/support/mobileApp/canonPrintSelphy" target="_blank" style={{ fontSize: '13.3333px' }}>
                    <img src="http://image.kr.canon/namo/binary/20221118121452287_HYT3MLRN.jpg" width="98%" />
                </a>
                <a href="https://kr.canon/support/mobileApp/spPhotoLayout" target="_blank" style={{ fontSize: '13.3333px' }}>
                    <img src="http://image.kr.canon/namo/binary/20221118121506761_QCFWE74E.jpg" width="98%" />
                </a>
                <img src="http://image.kr.canon/namo/binary/20221118121521690_962BZFXJ.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121531691_2J4CSC0Y.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121540450_RL9SXTWQ.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121545839_V6HXIZBJ.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121552779_E75W8NU4.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121558891_HEAV21UT.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121605241_IEGJR670.jpg" width="98%" />
                <img src="http://image.kr.canon/namo/binary/20221118121611818_XM0QSR6Z.jpg" width="98%" />
            </p>
        </div>

    </>
}