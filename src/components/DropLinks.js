import React from 'react';
import LinkTab from './LinkTab';
import LinkHead from './LinkHead';

import { LINK_TAB_DATA as linkTabData } from '../constants/linkTabData';

function DropLinks() {
    const [isOpened, setIsOpened] = React.useState(false);
    const [viewWidth, setViewWidth] = React.useState(1024);

    React.useEffect(() => {
        window.addEventListener('resize', () => (setViewWidth(window.innerWidth)))
    }, []);

    const handleOpenMenu = (() => {
        setIsOpened(true);
        //console.log(isOpened);
        //setTimeout(()=>{ console.log(isOpened);},2000);
    });
    const handleCloseMenu = (() => {
        setIsOpened(false);
        //setTimeout(()=>{ console.log(isOpened);},2000);
    })

    if (isOpened) {
        console.log(viewWidth);
        return (
                <ul className="dropLinks">
                    <LinkHead title='X' onClick={handleCloseMenu} />
                    {linkTabData.map((item, idx) => {
                        //const dimention = item.title.length * 9.6;
                        const position = idx * 35 + 45;
                        //console.log(item,idx, LinkTab);
                        return (<LinkTab
                            key={idx}
                            title={item.title}
                            pos={position}
                            url={item.url}
                            isActive={isOpened} />);
                    })}

                </ul>
        
        )
    } else {
        return (<ul className="dropLinks">
            <LinkHead title="Стриминги" onClick={handleOpenMenu} />
            {linkTabData.map((item, idx) => {
                const dimention = item.title.length * 9.6;
                const position = idx * 35 + 45;
                //console.log(item,idx, LinkTab);
                return (<LinkTab
                    key={idx}
                    title={item.title}
                    dim={dimention}
                    pos={position}
                    url={item.url}
                    isActive={isOpened} />);
            })}
        </ul>
        )
    }
}
export default DropLinks;
  //kljlk
  // key={idx}
                // title={item.title}
                // link={item.link}
                // size={dimension}

    //const avatarRef = React.useRef();

    //const [submitButtonText, setSubmitButtonText] = React.useState('Сохранить');

    //   React.useEffect(() => {
    //     setSubmitButtonText('Сохранить');
    //   }, [isOpen, setSubmitButtonText]);

    //   React.useEffect(() => {
    //     const form = document.forms.avatar;
    //     validatorRef.current = new Validator(validationConfig, form);
    //     validatorRef.current.enableValidation();
    //   }, []);

    //   function handleSubmit(e) {
    //     setSubmitButtonText('Сохранение...');
    //     e.preventDefault();
    //     onUpdateAvatar(avatarRef.current.value);
    //   }
    //   function handleClose() {
    //     avatarRef.current = '';
    //     validatorRef.current.clearErrors();
    //     onClose();
    //   }






