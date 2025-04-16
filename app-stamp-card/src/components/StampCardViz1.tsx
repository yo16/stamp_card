/*
スタンプカードの見た目
*/

interface StampCardViz1Props {
    userId: string;
    stampIds: string[];
}

export const StampCardViz1 = (props: StampCardViz1Props) => {
    return (
        <div>
            <div>
                user id: {props.userId}
            </div>
            <div>
                stamp ids:
                <ul>
                    {props.stampIds.map((stampId) => (
                        <li key={stampId}>{stampId}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
