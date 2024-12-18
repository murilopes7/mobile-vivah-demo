import React from 'react';
//import { FaInstagram } from "react-icons/fa";
import styles from './footer-design.module.css';

export const SocialIcons = () => {
    return (
        <div className={styles.socialIcons}>
            <svg width="269" height="56" viewBox="0 0 269 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <a className={styles.socialIcon} href="https://stackoverflow.com/questions/885691/how-to-make-a-ul-display-in-a-horizontal-row" target="_blank" rel="noopener noreferrer">
                    <g filter="url(#filter0_i_116_1966)">
                        <path
                            d="M37.5 23.04C36.519 23.04 35.56 23.3309 34.7444 23.8759C33.9287 24.4209 33.293 25.1956 32.9176 26.1019C32.5421 27.0082 32.4439 28.0055 32.6353 28.9676C32.8267 29.9298 33.2991 30.8136 33.9928 31.5072C34.6864 32.2009 35.5702 32.6733 36.5324 32.8647C37.4945 33.0561 38.4918 32.9579 39.3981 32.5824C40.3044 32.207 41.0791 31.5713 41.6241 30.7556C42.1691 29.94 42.46 28.981 42.46 28C42.46 27.3486 42.3317 26.7037 42.0824 26.1019C41.8332 25.5001 41.4678 24.9533 41.0072 24.4928C40.5467 24.0322 39.9999 23.6668 39.3981 23.4176C38.7963 23.1683 38.1514 23.04 37.5 23.04ZM57.36 18.14C57.3508 16.5954 57.0663 15.0648 56.52 13.62C56.1186 12.5625 55.4974 11.6022 54.6976 10.8024C53.8978 10.0026 52.9375 9.38144 51.88 8.98C50.4352 8.4337 48.9046 8.14925 47.36 8.14C44.78 8 44.02 8 37.5 8C30.98 8 30.22 8 27.64 8.14C26.0954 8.14925 24.5648 8.4337 23.12 8.98C22.0625 9.38144 21.1022 10.0026 20.3024 10.8024C19.5026 11.6022 18.8814 12.5625 18.48 13.62C17.9337 15.0648 17.6492 16.5954 17.64 18.14C17.5 20.72 17.5 21.48 17.5 28C17.5 34.52 17.5 35.28 17.64 37.86C17.6631 39.4098 17.947 40.9446 18.48 42.4C18.8774 43.4538 19.4983 44.409 20.3 45.2C21.0968 46.0041 22.0591 46.6252 23.12 47.02C24.5648 47.5663 26.0954 47.8508 27.64 47.86C30.22 48 30.98 48 37.5 48C44.02 48 44.78 48 47.36 47.86C48.9046 47.8508 50.4352 47.5663 51.88 47.02C52.9409 46.6252 53.9032 46.0041 54.7 45.2C55.5017 44.409 56.1226 43.4538 56.52 42.4C57.0645 40.9478 57.3489 39.4109 57.36 37.86C57.5 35.28 57.5 34.52 57.5 28C57.5 21.48 57.5 20.72 57.36 18.14ZM52.28 34.14C52.2169 35.3743 51.9534 36.5902 51.5 37.74C51.1117 38.6994 50.5345 39.5709 49.8027 40.3027C49.0709 41.0345 48.1994 41.6117 47.24 42C46.0793 42.4282 44.8567 42.6646 43.62 42.7H31.38C30.1433 42.6646 28.9207 42.4282 27.76 42C26.7679 41.6321 25.8721 41.044 25.14 40.28C24.4148 39.5629 23.8551 38.696 23.5 37.74C23.0715 36.5801 22.8416 35.3563 22.82 34.12V21.88C22.8416 20.6437 23.0715 19.4199 23.5 18.26C23.8679 17.2679 24.456 16.3721 25.22 15.64C25.9411 14.9197 26.8068 14.3607 27.76 14C28.9207 13.5718 30.1433 13.3354 31.38 13.3H43.62C44.8567 13.3354 46.0793 13.5718 47.24 14C48.2321 14.3679 49.1279 14.956 49.86 15.72C50.5852 16.4371 51.1449 17.304 51.5 18.26C51.9282 19.4207 52.1646 20.6433 52.2 21.88V28C52.2 32.12 52.34 32.54 52.28 34.12V34.14ZM49.08 19.26C48.8419 18.614 48.4664 18.0273 47.9796 17.5404C47.4927 17.0536 46.906 16.6781 46.26 16.44C45.3729 16.1325 44.4387 15.9836 43.5 16H31.5C30.5565 16.0092 29.6221 16.1853 28.74 16.52C28.1039 16.7473 27.5234 17.1074 27.0372 17.5764C26.5509 18.0454 26.1701 18.6125 25.92 19.24C25.6306 20.131 25.4887 21.0633 25.5 22V34C25.5209 34.9423 25.6966 35.8747 26.02 36.76C26.2581 37.406 26.6336 37.9927 27.1204 38.4796C27.6073 38.9664 28.194 39.3419 28.84 39.58C29.6936 39.8928 30.5914 40.0684 31.5 40.1H43.5C44.4435 40.0908 45.3779 39.9147 46.26 39.58C46.906 39.3419 47.4927 38.9664 47.9796 38.4796C48.4664 37.9927 48.8419 37.406 49.08 36.76C49.4147 35.8779 49.5908 34.9435 49.6 34V22C49.5996 21.0557 49.4233 20.1197 49.08 19.24V19.26ZM37.5 35.64C36.4976 35.64 35.5051 35.4422 34.5793 35.0581C33.6535 34.6739 32.8126 34.1108 32.1048 33.4011C31.3969 32.6914 30.8361 31.849 30.4543 30.9222C30.0725 29.9954 29.8774 29.0024 29.88 28C29.88 26.4881 30.3286 25.0102 31.169 23.7534C32.0094 22.4966 33.2037 21.5173 34.6009 20.9397C35.9981 20.362 37.5353 20.2119 39.0179 20.5083C40.5004 20.8047 41.8617 21.5343 42.9294 22.6048C43.997 23.6753 44.7231 25.0385 45.0156 26.5218C45.3082 28.0051 45.154 29.5419 44.5727 30.9376C43.9914 32.3333 43.009 33.5251 41.75 34.3622C40.491 35.1992 39.0119 35.644 37.5 35.64ZM45.5 21.86C45.0579 21.8132 44.6487 21.6044 44.3514 21.2739C44.054 20.9434 43.8895 20.5146 43.8895 20.07C43.8895 19.6254 44.054 19.1966 44.3514 18.8661C44.6487 18.5356 45.0579 18.3268 45.5 18.28C45.9421 18.3268 46.3513 18.5356 46.6486 18.8661C46.946 19.1966 47.1105 19.6254 47.1105 20.07C47.1105 20.5146 46.946 20.9434 46.6486 21.2739C46.3513 21.6044 45.9421 21.8132 45.5 21.86Z"
                            fill="#F1E9D2" />
                    </g>

                    <path
                        d="M37.4993 36.14C36.4314 36.1399 35.374 35.9292 34.3877 35.5199C33.4011 35.1105 32.505 34.5104 31.7507 33.7542C30.9965 32.9979 30.3988 32.1002 29.992 31.1126C29.5853 30.1252 29.3773 29.0673 29.38 27.9994M37.4993 36.14C39.11 36.1441 40.6856 35.6703 42.0268 34.7785C43.3682 33.8867 44.4149 32.6168 45.0342 31.1298C45.6536 29.6428 45.8179 28.0055 45.5062 26.4251C45.1945 24.8447 44.4209 23.3923 43.2834 22.2517C42.1458 21.1112 40.6955 20.3338 39.1159 20.018C37.5363 19.7022 35.8985 19.8621 34.4099 20.4776C32.9213 21.0931 31.6487 22.1364 30.7533 23.4754C29.8581 24.8144 29.3801 26.3888 29.38 27.9994M37.4993 36.14C37.4991 36.14 37.4989 36.14 37.4987 36.14L37.5 35.64L37.5 36.14C37.4998 36.14 37.4996 36.14 37.4993 36.14ZM29.38 27.9994C29.38 27.9996 29.38 27.9998 29.38 28L29.88 28L29.38 27.9987C29.38 27.9989 29.38 27.9992 29.38 27.9994ZM56.86 18.143L56.8601 18.1551L56.8607 18.1671C56.9999 20.7312 57 21.4774 57 28C57 34.5226 56.9999 35.2688 56.8607 37.8329L56.8601 37.8447L56.86 37.8564C56.8493 39.3483 56.5759 40.8266 56.0522 42.2236C55.6802 43.2098 55.0991 44.1038 54.3488 44.8441L54.3488 44.8441L54.3448 44.8481C53.5991 45.6006 52.6985 46.1819 51.7056 46.5514L51.7032 46.5523C50.3139 47.0776 48.8422 47.3511 47.357 47.36L47.3449 47.3601L47.3329 47.3607C44.7688 47.4999 44.0226 47.5 37.5 47.5C30.9774 47.5 30.2312 47.4999 27.6671 47.3607L27.6551 47.3601L27.643 47.36C26.1578 47.3511 24.6861 47.0776 23.2968 46.5523L23.2944 46.5514C22.3015 46.1819 21.4009 45.6006 20.6552 44.8481L20.6552 44.848L20.6512 44.8441C19.9014 44.1044 19.3207 43.2112 18.9487 42.2258C18.4356 40.8238 18.1622 39.3454 18.1399 37.8526L18.1398 37.8427L18.1393 37.8329C18.0001 35.2688 18 34.5226 18 28C18 21.4774 18.0001 20.7312 18.1393 18.1671L18.1399 18.1551L18.14 18.143C18.1489 16.6579 18.4223 15.1863 18.9476 13.7972C19.3239 12.8059 19.9062 11.9057 20.6559 11.1559C21.4057 10.4062 22.3059 9.82391 23.2972 9.44756C24.6863 8.92235 26.1579 8.64888 27.643 8.63999L27.6551 8.63992L27.6671 8.63927C30.2312 8.50013 30.9774 8.5 37.5 8.5C44.0226 8.5 44.7688 8.50013 47.3329 8.63927L47.3449 8.63992L47.357 8.63999C48.842 8.64888 50.3135 8.92231 51.7025 9.44745C52.6939 9.8238 53.5942 10.4061 54.3441 11.1559C55.0939 11.9058 55.6762 12.8061 56.0525 13.7975C56.5777 15.1865 56.8511 16.658 56.86 18.143ZM52.7793 34.1655L52.78 34.1528V34.14V34.1295C52.8086 33.3672 52.7916 32.8639 52.7665 32.1225C52.7651 32.081 52.7637 32.0388 52.7622 31.9957C52.7349 31.1823 52.7 30.0531 52.7 28V21.88V21.8729L52.6998 21.8657C52.6629 20.5748 52.4161 19.2985 51.9691 18.0869L51.9687 18.0859C51.589 17.0637 50.991 16.1366 50.2163 15.3692C49.4328 14.553 48.4747 13.9246 47.4139 13.5312L47.4131 13.5309C46.2015 13.0839 44.9252 12.8371 43.6343 12.8002L43.6271 12.8H43.62H31.38H31.3729L31.3657 12.8002C30.0748 12.8371 28.7985 13.0839 27.5869 13.5309L27.5869 13.5309L27.583 13.5324C26.5653 13.9175 25.6407 14.5141 24.8703 15.2826C24.0536 16.0663 23.4248 17.0248 23.0312 18.0861L23.031 18.0867C22.583 19.2993 22.3427 20.5788 22.3201 21.8713L22.32 21.8713V21.88V34.12H22.3199L22.3201 34.1287C22.3427 35.4212 22.583 36.7007 23.031 37.9133L23.0313 37.9141C23.411 38.9363 24.009 39.8634 24.7837 40.6308C25.5672 41.447 26.5253 42.0754 27.5861 42.4688L27.5869 42.4691C28.7985 42.9161 30.0748 43.1629 31.3657 43.1998L31.3729 43.2H31.38H43.62H43.6271L43.6343 43.1998C44.9252 43.1629 46.2015 42.9161 47.4131 42.4691L47.4204 42.4664L47.4276 42.4635C48.4491 42.0501 49.377 41.4355 50.1563 40.6563C50.9355 39.877 51.5501 38.9491 51.9635 37.9276L51.9651 37.9234C52.4385 36.7232 52.7134 35.454 52.7793 34.1655ZM48.6109 19.4329L48.6181 19.4316C48.9362 20.2505 49.0996 21.1214 49.1 22C49.1 22.0001 49.1 22.0001 49.1 22.0002V33.9976C49.0911 34.8813 48.926 35.7564 48.6125 36.5826L48.6109 36.5871C48.3977 37.1652 48.0617 37.6903 47.626 38.126C47.1903 38.5617 46.6652 38.8977 46.0871 39.1109L46.0871 39.1108L46.0826 39.1125C45.2564 39.426 44.3813 39.5911 43.4976 39.6H31.5088C30.6561 39.5694 29.8135 39.4042 29.0123 39.1106C28.4344 38.8975 27.9095 38.5616 27.474 38.126C27.0384 37.6905 26.7025 37.1657 26.4894 36.5877C26.1856 35.7558 26.0203 34.8798 26 33.9944V22H26L26 21.994C25.9894 21.1172 26.1213 20.2446 26.3905 19.4102C26.6144 18.8545 26.953 18.3523 27.3843 17.9363C27.8194 17.5166 28.3389 17.1943 28.9082 16.9908L28.9083 16.9909L28.9174 16.9875C29.7436 16.6739 30.6188 16.5089 31.5025 16.5H43.5V16.5001L43.5087 16.4999C44.3871 16.4846 45.2613 16.6236 46.0916 16.9108C46.668 17.124 47.1914 17.4594 47.626 17.894C48.0617 18.3297 48.3977 18.8548 48.6109 19.4329ZM45.4474 22.3572L45.5 22.3628L45.5526 22.3572C46.1176 22.2974 46.6404 22.0307 47.0203 21.6084C47.4003 21.1861 47.6105 20.6381 47.6105 20.07C47.6105 19.5019 47.4003 18.9539 47.0203 18.5316C46.6404 18.1093 46.1176 17.8426 45.5526 17.7828L45.5 17.7772L45.4474 17.7828C44.8824 17.8426 44.3596 18.1093 43.9797 18.5316C43.5997 18.9539 43.3895 19.5019 43.3895 20.07C43.3895 20.6381 43.5997 21.1861 43.9797 21.6084C44.3596 22.0307 44.8824 22.2974 45.4474 22.3572ZM35.0222 24.2916C35.7556 23.8016 36.6179 23.54 37.5 23.54C38.0857 23.54 38.6657 23.6554 39.2068 23.8795C39.7479 24.1036 40.2395 24.4322 40.6537 24.8463C41.0678 25.2605 41.3964 25.7521 41.6205 26.2932C41.8446 26.8343 41.96 27.4143 41.96 28C41.96 28.8821 41.6984 29.7444 41.2084 30.4778C40.7183 31.2113 40.0217 31.7829 39.2068 32.1205C38.3918 32.4581 37.4951 32.5464 36.6299 32.3743C35.7647 32.2022 34.97 31.7774 34.3463 31.1537C33.7226 30.53 33.2978 29.7353 33.1257 28.8701C32.9536 28.0049 33.0419 27.1082 33.3795 26.2932C33.7171 25.4783 34.2887 24.7817 35.0222 24.2916Z"
                        stroke="#4D5454" strokeOpacity="0.4" />
                </a>
                <a className={styles.socialIcon} href="https://www.youtube.com/shorts/ckrS6ArvOoI" target="_blank" rel="noopener noreferrer">
                    <g filter="url(#filter1_i_116_1966)">
                        <path
                            d="M131.507 6.50363C127.934 6.5025 124.425 7.53056 121.347 9.48089C118.268 11.4312 115.732 14.2326 114.001 17.5937C112.271 20.9548 111.41 24.7529 111.507 28.5929C111.605 32.433 112.658 36.1748 114.556 39.4293L115.032 40.2419L113.011 48.1722L120.58 46.0391L121.309 46.5035C124.389 48.4682 127.905 49.5034 131.487 49.5H131.497C136.801 49.501 141.889 47.2367 145.64 43.2054C149.391 39.174 151.499 33.7058 151.5 28.0036C151.501 22.3015 149.395 16.8325 145.645 12.7998C141.895 8.76706 136.808 6.50096 131.504 6.5L131.507 6.50363ZM143.264 37.2309C142.823 38.0167 142.234 38.6956 141.536 39.2245C140.838 39.7534 140.045 40.1208 139.208 40.3036C137.945 40.5369 136.648 40.45 135.422 40.0496C134.258 39.6618 133.114 39.2064 131.996 38.6856C127.845 36.4458 124.306 33.0841 121.728 28.9305C120.32 27.008 119.467 24.6854 119.271 22.2482C119.255 21.2423 119.434 20.244 119.797 19.3166C120.159 18.3891 120.697 17.5529 121.377 16.8609C121.578 16.6154 121.824 16.417 122.1 16.2778C122.376 16.1387 122.675 16.0618 122.98 16.0519C123.378 16.0519 123.779 16.0519 124.13 16.0737C124.501 16.0918 124.994 15.9213 125.48 17.1838C125.986 18.4753 127.188 21.6568 127.336 21.9797C127.431 22.1492 127.485 22.3413 127.494 22.5388C127.503 22.7363 127.466 22.9331 127.387 23.1116C127.236 23.5 127.034 23.863 126.786 24.189C126.482 24.5663 126.155 25.0307 125.885 25.3209C125.581 25.6438 125.271 25.992 125.618 26.6378C126.523 28.2985 127.649 29.8069 128.963 31.1144C130.39 32.4754 132.027 33.5604 133.799 34.3214C134.399 34.6479 134.75 34.5898 135.101 34.1581C135.452 33.7264 136.603 32.2717 137.004 31.626C137.406 30.9802 137.804 31.089 138.354 31.3031C138.904 31.5171 141.864 33.0807 142.464 33.4072C143.065 33.7337 143.467 33.8897 143.615 34.1581C143.777 35.1973 143.656 36.2648 143.264 37.2309Z"
                            fill="#F1E9D2" />
                    </g>
                    <path
                        d="M131.507 7.25363L131.866 7.25374C136.822 7.35518 141.567 9.51614 145.095 13.3105C148.711 17.1991 150.751 22.4835 150.75 28.0035C150.749 33.5236 148.708 38.8072 145.091 42.6944C141.475 46.5799 136.584 48.7509 131.497 48.75H131.497H131.487H131.486C128.051 48.7533 124.674 47.7606 121.712 45.8711L121.712 45.8709L120.983 45.4065L120.7 45.2261L120.377 45.3172L114.059 47.0977L115.759 40.4272L115.835 40.1287L115.68 39.863L115.204 39.0514C115.204 39.0512 115.204 39.0509 115.204 39.0507C113.371 35.9077 112.352 32.29 112.257 28.5739C112.163 24.8575 112.996 21.1843 114.668 17.937C116.34 14.6899 118.786 11.9906 121.748 10.1145C124.709 8.23863 128.079 7.25255 131.507 7.25363ZM143.918 37.5983L143.941 37.5567L143.959 37.5124C144.402 36.4193 144.539 35.2145 144.356 34.0425L144.336 33.9113L144.272 33.7951C144.093 33.4717 143.799 33.2803 143.588 33.1569C143.468 33.0871 143.304 33.0016 143.139 32.9154C143.03 32.8585 142.92 32.8013 142.823 32.7482C142.517 32.5818 141.622 32.1069 140.736 31.6472C139.874 31.2002 138.949 30.7298 138.626 30.6041L138.615 30.6C138.367 30.5031 137.961 30.3452 137.532 30.3977C137.01 30.4617 136.639 30.7939 136.367 31.2299C135.996 31.8276 134.878 33.2441 134.519 33.685C134.478 33.7361 134.448 33.7636 134.431 33.7775C134.425 33.7761 134.416 33.7741 134.405 33.7711C134.354 33.7573 134.275 33.7266 134.157 33.6624L134.126 33.6459L134.094 33.6323C132.409 32.9083 130.849 31.8754 129.486 30.5772C128.228 29.3235 127.147 27.8761 126.278 26.2808C126.227 26.1856 126.218 26.1339 126.216 26.1179C126.215 26.1079 126.215 26.1061 126.216 26.1046C126.216 26.1043 126.216 26.1041 126.216 26.1038C126.219 26.0962 126.229 26.0715 126.265 26.0233C126.304 25.972 126.354 25.917 126.431 25.8348L126.434 25.8317C126.629 25.6223 126.872 25.3049 127.086 25.0251C127.191 24.8886 127.288 24.761 127.37 24.6593L127.377 24.6511L127.383 24.6426C127.671 24.2642 127.905 23.8449 128.08 23.3981C128.202 23.1169 128.257 22.8108 128.243 22.5053C128.23 22.2057 128.15 21.9114 128.009 21.6464C127.91 21.4207 127.495 20.3371 127.062 19.205C126.736 18.3533 126.399 17.4742 126.179 16.9122C125.91 16.2148 125.576 15.7353 125.103 15.494C124.867 15.3738 124.646 15.3388 124.474 15.3286C124.392 15.3237 124.318 15.3244 124.268 15.3248C124.213 15.3254 124.189 15.3255 124.17 15.3247C123.798 15.3019 123.38 15.3019 122.993 15.3019H122.98H122.967L122.955 15.3023C122.54 15.3158 122.134 15.4206 121.762 15.6082C121.401 15.7906 121.081 16.0466 120.819 16.3583C120.078 17.12 119.493 18.0345 119.098 19.0435C118.7 20.0626 118.504 21.1576 118.521 22.2598L118.521 22.284L118.523 22.3082C118.729 24.8701 119.624 27.3172 121.105 29.3502C123.749 33.5997 127.377 37.0457 131.64 39.3457L131.66 39.3561L131.68 39.3654C132.824 39.8983 133.993 40.3642 135.185 40.7612L135.189 40.7626C136.534 41.2016 137.957 41.2973 139.344 41.0411L139.356 41.0389L139.368 41.0363C140.314 40.8298 141.206 40.4153 141.989 39.8223C142.771 39.2294 143.427 38.4713 143.918 37.5983Z"
                        stroke="#7B7F78" strokeOpacity="0.7" strokeWidth="1.5" />
                </a>
                <a className={styles.socialIcon} href="https://www.youtube.com/shorts/ckrS6ArvOoI" target="_blank" rel="noopener noreferrer">
                    <g filter="url(#filter2_i_116_1966)">
                        <path
                            d="M228.5 5C223.951 5 219.504 6.34893 215.722 8.8762C211.94 11.4035 208.992 14.9956 207.251 19.1983C205.51 23.401 205.054 28.0255 205.942 32.4871C206.829 36.9486 209.02 41.0468 212.237 44.2634C215.453 47.48 219.551 49.6706 224.013 50.558C228.474 51.4455 233.099 50.99 237.302 49.2492C241.504 47.5084 245.097 44.5604 247.624 40.7781C250.151 36.9958 251.5 32.549 251.5 28C251.494 21.9019 249.069 16.0553 244.757 11.7433C240.445 7.43125 234.598 5.00609 228.5 5ZM242.16 22.7399V24.2257C242.16 24.3394 242.137 24.452 242.093 24.5568C242.049 24.6615 241.984 24.7564 241.902 24.8357C241.821 24.9151 241.724 24.9772 241.618 25.0186C241.513 25.06 241.399 25.0798 241.286 25.0767C238.857 24.9051 236.534 24.0184 234.609 22.5283V33.4027C234.608 34.6062 234.368 35.7976 233.902 36.9072C233.436 38.0169 232.754 39.0226 231.895 39.8657C231.029 40.7308 229.999 41.4144 228.866 41.8765C227.732 42.3386 226.518 42.5698 225.294 42.5567C222.833 42.5531 220.47 41.5874 218.711 39.8657C217.592 38.7373 216.786 37.337 216.372 35.8025C215.958 34.268 215.951 32.6523 216.351 31.1142C216.717 29.6376 217.455 28.2806 218.497 27.1743C219.274 26.2246 220.254 25.4606 221.364 24.9381C222.474 24.4156 223.687 24.1478 224.914 24.1544H226.8V28.0713C226.801 28.185 226.778 28.2977 226.732 28.4017C226.685 28.5057 226.618 28.5986 226.533 28.6744C226.448 28.7501 226.348 28.8069 226.239 28.8409C226.131 28.8749 226.016 28.8854 225.903 28.8717C224.808 28.5428 223.628 28.6519 222.612 29.176C221.596 29.7001 220.823 30.5983 220.456 31.6813C220.089 32.7642 220.157 33.9473 220.646 34.9811C221.134 36.0149 222.005 36.8187 223.074 37.223C223.695 37.5795 224.39 37.7888 225.103 37.8371C225.655 37.8601 226.207 37.7911 226.731 37.6255C227.607 37.3301 228.368 36.769 228.91 36.0203C229.451 35.2716 229.745 34.3726 229.751 33.4487V13.6342C229.751 13.415 229.838 13.2047 229.993 13.0495C230.148 12.8943 230.358 12.8068 230.577 12.8062H233.831C234.043 12.8065 234.246 12.8876 234.4 13.033C234.553 13.1784 234.645 13.3771 234.657 13.5882C234.776 14.603 235.098 15.5834 235.605 16.4707C236.111 17.358 236.792 18.1338 237.606 18.7517C238.705 19.5771 240.011 20.0833 241.38 20.2145C241.585 20.232 241.777 20.3232 241.92 20.4712C242.063 20.6192 242.147 20.814 242.157 21.0195L242.16 22.7399Z"
                            fill="#F1E9D2" />
                    </g>
                    <path
                        d="M243.16 22.7386V22.7399V24.2254C243.16 24.2255 243.16 24.2256 243.16 24.2257C243.16 24.4729 243.11 24.7176 243.014 24.9454C242.918 25.1733 242.777 25.3796 242.6 25.5522L241.902 24.8357L242.6 25.5522C242.423 25.7247 242.213 25.86 241.982 25.9501M243.16 22.7386L241.618 25.0186M243.16 22.7386L243.157 21.0182L243.157 20.9936L243.156 20.9691C243.134 20.5221 242.95 20.0985 242.639 19.7766C242.33 19.4562 241.915 19.2581 241.472 19.2187C240.288 19.1045 239.159 18.6669 238.208 17.9537C237.503 17.4175 236.913 16.7444 236.473 15.9748L235.605 16.4707L236.473 15.9748C236.037 15.2112 235.758 14.3682 235.653 13.4953C235.619 13.0432 235.417 12.6194 235.087 12.307L234.4 13.033L235.087 12.307C234.748 11.9859 234.299 11.8068 233.833 11.8062H233.831L230.577 11.8062L230.574 11.8062C230.09 11.8075 229.627 12.0007 229.285 12.3434C228.943 12.6861 228.751 13.1503 228.751 13.6342V33.4451M243.16 22.7386L229.751 33.4487M241.982 25.9501L241.618 25.0186M241.982 25.9501C241.982 25.9501 241.982 25.95 241.982 25.95L241.618 25.0186M241.982 25.9501C241.752 26.0401 241.506 26.083 241.259 26.0763L241.237 26.0757L241.215 26.0742C239.237 25.9344 237.323 25.3555 235.609 24.3892M241.618 25.0186C241.513 25.06 241.399 25.0798 241.286 25.0767C239.264 24.9339 237.316 24.2955 235.609 23.226V24.3892M235.609 24.3892V33.4027V33.4031C235.608 34.7395 235.341 36.0623 234.824 37.2944C234.307 38.5252 233.551 39.6408 232.598 40.5762L234.609 23.7656C234.933 23.9886 235.267 24.1966 235.609 24.3892ZM226.533 28.6744L227.199 29.4205C227.008 29.5909 226.783 29.7186 226.538 29.7951L226.538 29.7951C226.294 29.8717 226.037 29.8953 225.783 29.8644L225.698 29.854L225.616 29.8294C224.769 29.5751 223.856 29.6594 223.07 30.0647C222.285 30.4701 221.687 31.1646 221.403 32.0021C221.12 32.8396 221.172 33.7544 221.55 34.5539C221.927 35.3534 222.601 35.9749 223.428 36.2876L223.503 36.3159L223.572 36.3557C224.057 36.634 224.6 36.7988 225.158 36.8385M226.533 28.6744L225.903 28.8717C224.808 28.5428 223.628 28.6519 222.612 29.176C221.596 29.7001 220.823 30.5983 220.456 31.6813C220.089 32.7642 220.157 33.9473 220.646 34.9811C221.134 36.0149 222.005 36.8187 223.074 37.223C223.695 37.5795 224.39 37.7888 225.103 37.8371M226.533 28.6744L227.199 29.4205C227.39 29.2501 227.542 29.041 227.646 28.8071C227.749 28.5745 227.802 28.3228 227.8 28.0684C227.8 28.0669 227.8 28.0654 227.8 28.064L226.8 28.0713L226.533 28.6744ZM225.158 36.8385C225.153 36.8383 225.149 36.8381 225.145 36.838L225.103 37.8371M225.158 36.8385C225.162 36.8388 225.166 36.8391 225.17 36.8394L225.103 37.8371M225.158 36.8385C225.592 36.8551 226.019 36.8004 226.421 36.6748M225.103 37.8371C225.655 37.8601 226.207 37.7911 226.731 37.6255M226.731 37.6255L226.412 36.678C226.415 36.6769 226.418 36.6758 226.421 36.6748M226.731 37.6255C227.607 37.3301 228.368 36.769 228.91 36.0203C229.451 35.2716 229.745 34.3726 229.751 33.4487M226.731 37.6255L226.43 36.6719C226.427 36.6729 226.424 36.6738 226.421 36.6748M226.421 36.6748C227.095 36.4451 227.682 36.0117 228.099 35.4344C228.518 34.8551 228.746 34.1598 228.751 33.4451M229.751 33.4487H228.751V33.4451M229.751 33.4487L228.751 33.4421C228.751 33.4431 228.751 33.4441 228.751 33.4451M225.292 43.5567L225.294 42.5567L225.283 43.5566C225.285 43.5566 225.286 43.5567 225.288 43.5567C225.289 43.5567 225.291 43.5567 225.292 43.5567ZM215.384 30.8624C215.383 30.8643 215.383 30.8662 215.382 30.8681C215.382 30.87 215.381 30.8719 215.381 30.8738L216.351 31.1142L215.384 30.8624ZM217.723 26.5411L218.497 27.1743L217.769 26.4887C217.761 26.4971 217.753 26.5056 217.746 26.5141C217.738 26.5231 217.731 26.5321 217.723 26.5411ZM224.92 23.1544C224.919 23.1544 224.918 23.1544 224.917 23.1544H224.914V24.1544L224.92 23.1544ZM216.277 9.70767C219.895 7.29037 224.148 6.0001 228.499 6C234.333 6.00595 239.925 8.32576 244.05 12.4504C248.174 16.5751 250.494 22.1678 250.5 28.001C250.5 32.3518 249.21 36.6049 246.792 40.2225C244.375 43.8404 240.939 46.6602 236.919 48.3253C232.899 49.9905 228.476 50.4261 224.208 49.5773C219.94 48.7284 216.02 46.6331 212.944 43.5563C209.867 40.4796 207.772 36.5596 206.923 32.292C206.074 28.0244 206.51 23.6009 208.175 19.581C209.84 15.561 212.66 12.1251 216.277 9.70767Z"
                        stroke="#7B7F78" strokeOpacity="0.3" strokeWidth="2" />
                </a>
                <defs>
                    <filter id="filter0_i_116_1966" x="17.5" y="8" width="40" height="44" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_116_1966" />
                    </filter>
                    <filter id="filter1_i_116_1966" x="111.5" y="6.5" width="40" height="47" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_116_1966" />
                    </filter>
                    <filter id="filter2_i_116_1966" x="205.5" y="5" width="46" height="50" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_116_1966" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default function Footer() {
    return (
        <div className={styles.container_footer}>
            <ul className={styles.informacoes_footer}>
                <li className={styles.listFooter}>
                    <h1 className={styles.titleFooter} style={{ marginTop: '5vh' }}>Endereço</h1>
                    <p className={styles.paragraphFooter}>Rua Onde tem coquinho, <br /> Bairro Na casa do Chapéu</p>
                </li>

                <li className={styles.listFooter} style={{ marginTop: '3vh' }}>
                    <h1 className={styles.titleFooter}>Contate-nos</h1>
                    <p className={styles.paragraphFooter}>(12)99201-6631</p>
                </li>

                <li className={styles.listFooter} style={{ marginTop: '3vh' }}>
                    <h1 className={styles.titleFooter}>Email</h1>
                    <p className={styles.paragraphFooter}>fabianalslcarvalho@gmail.com</p>
                </li>
            </ul>
            <ul className={styles.siteMap}>
                <h1 className={styles.titleFooter}>Site Map</h1>
                <li className={styles.listFooter}>
                    <a href='#home' className={styles.paragraphFooter}>Home</a>
                </li>
                <li className={styles.listFooter}>
                    <a href='#about' className={styles.paragraphFooter}>About</a>
                </li>
                <li className={styles.listFooter}>
                    <a href='#produtos' className={styles.paragraphFooter}>Produtos</a>
                </li>
            </ul>
            <ul className={styles.servicosFooter}>
                <h1 className={styles.titleFooter}>Produtos</h1>

                <li className={styles.listFooter}>
                    <p className={styles.paragraphFooter}>01</p>
                </li>
                <li className={styles.listFooter}>
                    <p className={styles.paragraphFooter}>02</p>
                </li>
                <li className={styles.listFooter}>
                    <p className={styles.paragraphFooter}>03</p>
                </li>
            </ul>

            <div className={styles.socialMediaIconsFooter}>
                <hr className={styles.linha}
                    style={{
                        right: '0vw',
                        top: '8vh',
                    }}
                />
                <hr className={styles.linha} style={{ top: '8vh', left: '-5vw' }} />
                <SocialIcons />
            </div>

            <div className={styles.Endfooter} style={{ paddingBottom: '8em' }}>
                <small className={styles.copyrightFooter}>
                    <svg style={{ marginRight: '0.6vw' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
                    </svg>
                    2024, Vivah Hair & Therapy
                </small>
                {/*  <img src="https://i.postimg.cc/xdjVJWK5/LOGO-ALTERNATIVO-VARIA-O-COM-FUNDO-1.png" style={{overflow: 'hidden', marginLeft: '44em', marginTop: '5em' }} alt="Imagem do logo da empresa" /> */}
            </div>
        </div>
    );
}