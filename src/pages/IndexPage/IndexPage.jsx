import './IndexPage.css';
import Adsgram from "@/adsgram-sdk/Adsgram.jsx";
import {Placeholder, Text} from "@telegram-apps/telegram-ui";


export function IndexPage() {
    return (
        <div>
            <Placeholder
                className='absolute top-0 left-0 w-full h-full box-border'
                header='Adsgram Index'
                description={
                    <>
                        <Text>
                            To display Ads in the Main Page
                        </Text>
                        <Adsgram debug={true} blockId={"257"} className="pt-3" style={{margin:"16px auto 0"}}/>
                    </>
                }
            />
        </div>
    );
}
