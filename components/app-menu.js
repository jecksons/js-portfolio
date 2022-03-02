import menuWhite from '../media/menu-white.webp';
import menuBlack from '../media/menu-black.webp';
import PropTypes from 'prop-types';
import Image from 'next/image';

function AppMenu({currentMenu}) {

    return (
        <div className='pos-relative'>
            <button className='btn' onClick={() => {}}>
                <Image src={menuWhite} />
            </button>
        </div>
    )
}


AppMenu.propTypes = {
    currentMenu: PropTypes.string.isRequired
}

export default AppMenu;