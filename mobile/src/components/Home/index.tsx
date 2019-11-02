import { Box, Button, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import React, { ReactNode, MouseEvent, useMemo } from 'react';
import './Home.scss';
import { scrollBody } from '../../utils';
interface VideoCard {
    title: string;
    subtitle: string;
    src: string;
    className: string;
    children: ReactNode;
}

const VideoCard = ({
    title,
    subtitle,
    src,
    children,
    className
}: VideoCard) => (
    <Box my={4} className={className}>
        <Box mx={1} mb={3}>
            <Typography variant="h2">{title}</Typography>
        </Box>
        <Box mx={1} mb={3}>
            <Typography variant="h3">{subtitle}</Typography>
        </Box>
        <Box mx={1} mb={2}>
            <Typography>{children}</Typography>
        </Box>
        <div className="embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item"
                title={title}
                src={src}
            ></iframe>
        </div>
    </Box>
);

const Home = () => {
    const quickButonClick = (e: MouseEvent<HTMLElement>) => {
        const targetDOM = (e.target as HTMLElement).getAttribute('data-target');
        scrollBody('.' + targetDOM);
    };
    const diffDay: number = useMemo(
        () => dayjs('2020/1/11').diff(dayjs(), 'day'),
        []
    );
    return (
        <div className="page-home">
            <Box textAlign="center" mt="22px">
                <img
                    src="/img/home/kv.png"
                    alt="2020/1/11,台灣總選大選投票日"
                />
            </Box>
            <Box my="10px" mb="32px">
                <Typography
                    variant="h2"
                    align="center"
                    className="color-primary"
                >
                    距離立委投票剩下 {diffDay} 天
                    <br />
                    你準備好了嗎？
                </Typography>
            </Box>
            <Box className="page-home__primary-btn-wrap">
                <div className="page-home__primary-btn-wrap-inner">
                    <Button
                        variant="outlined"
                        color="primary"
                        href="/county"
                        className="page-home__primary-btn"
                    >
                        <Typography variant="h3">區域立委</Typography>
                    </Button>
                </div>
                <div className="page-home__primary-btn-wrap-inner">
                    <Button
                        variant="outlined"
                        color="primary"
                        href="/parties"
                        className="page-home__primary-btn"
                    >
                        <Typography variant="h3">不分區立委</Typography>
                    </Button>
                </div>
            </Box>
            <Box mt="40px" mb="58px" textAlign="center">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={3}
                >
                    <Box mr="12px">
                        <img src="/img/home/hand.png" alt="等等..." />
                    </Box>
                    <Typography className="color-red">等等...</Typography>
                </Box>
                <Typography
                    className="color-red underline page-home__quick-btn"
                    data-target="page-home-quick-0"
                    onClick={quickButonClick}
                >
                    立委在做什麼？
                </Typography>
                <Typography
                    className="color-red underline page-home__quick-btn"
                    data-target="page-home-quick-1"
                    onClick={quickButonClick}
                >
                    為什麼要投兩張票？
                </Typography>
            </Box>
            <Box className="page-home__how color-white" py="50px" px="70px">
                <Typography variant="h2" align="center">
                    選前大補帖收錄了
                    <br />
                    這些地方的開放資料
                </Typography>
            </Box>
            <Box ml={2} mr={2}>
                <VideoCard
                    className="page-home-quick-0"
                    title="大補帖一、立委的工作是什麼？"
                    subtitle="立法委員究竟該做什麼？"
                    src="https://www.youtube.com/embed/lOCqaZ5Pb_w"
                >
                    立法委員的究竟該做什麼？
                    <br />
                    憲法第63條則載明「立法院有議決法律案、預算案、戒嚴案、大赦案、宣戰案、媾和案、條約案及國家其他重要事項之權。」而根據「立法院職權行使法」對立法委員之職責，亦有更明確與具體的描述。
                    <br />
                    「什麼樣的選民，就會有什麼樣的立委！」國會助理說得直接。
                    <br />
                    換言之，身為選民該思考的是，我們究竟想要一個什麼樣的立法委員？如果憲法上是如此明定立委的職權，透過訪談，我們發現納稅人每年花了近千萬養一個立法委員，而他們每天24小時願意、不願意做的那些事，真的是我們期望的嗎？
                    <a href="#" className="color-primary d-block font-thumb">
                        原文出處：關鍵評論網
                    </a>
                </VideoCard>
                <div className="divider"></div>
                <VideoCard
                    className="page-home-quick-1"
                    title="大補帖二、為什麼有兩票？"
                    subtitle="單一選區兩票制"
                    src="https://www.youtube.com/embed/zPkX6cn4oMg"
                >
                    咱們台灣在2008年後的新選制是採用「單一選區 /
                    兩票制」，也就是混合了多數決和比例代表制：每個人有兩張票，一票投「區域立委」，這票是投給人；第二張票則是投給政黨（政黨票），以選出「不分區立委」。
                    <br />
                    其中單一選區（小選區）下選出的區域立委共有73席，以政黨票決定的不分區立委則有34席。但立委總共有113席（73+34+6），另外6席是複數制選區的原住民立委（平地及山地原住民各3席）
                    <a href="#" className="color-primary d-block font-thumb">
                        原文出處：關鍵評論網
                    </a>
                </VideoCard>
            </Box>
        </div>
    );
};
export default Home;
