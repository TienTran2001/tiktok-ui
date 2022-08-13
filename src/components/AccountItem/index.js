import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/f465ba98f4349fc23f730157d5da5507~c5_300x300.webp?x-expires=1660446000&x-signature=c46bijbOvWPhslp5uxG1KWcCC00%3D"
                    alt="tarank"
                />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name', 'text-truncate-1line')}>
                    <span>tarankaaa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username', 'text-truncate-1line')}>Dasha Taran</span>
            </div>
        </div>
    );
}

export default AccountItem;
