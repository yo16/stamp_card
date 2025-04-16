/*
スタンプカードの見た目
*/

interface StampCardViz2Props {
    userId: string;
    stampIds: string[];
}

// スタンプIDごとの位置情報
const stampPositions: {
    [stampId: string]: {
        x: number;
        y: number;
        img: string;
    }
} = {
    "stamp1": {
        x: 315,
        y: 197,
        img: "./stamp1.png",
    },
    "stamp2": {
        x: 230,
        y: 385,
        img: "./stamp2.png",
    },
    "stamp3": {
        x: 102,
        y: 278,
        img: "./stamp3.png",
    },
}

export const StampCardViz2 = (props: StampCardViz2Props) => {
    return (
        <div style={{ position: "relative" }}>
            <img src="./stamp_card.png" />
            {props.stampIds.map((stampId) => (
                (stampPositions[stampId]) && (
                    <img
                        src={ stampPositions[stampId].img }
                        style={{
                        position: "absolute",
                        left: stampPositions[stampId].x -24,    // 画像のサイズが48x48
                        top: stampPositions[stampId].y -24,
                    }}
                />
              )
            ))}
        </div>
    )
}
