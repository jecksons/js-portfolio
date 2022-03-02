import styles from '../styles/PageContent.module.css';

export default function PageContent({children, backColor}) {
    return (
        <div className={styles.pageContent}   style={backColor ?  {backgroundColor: backColor} : {}} >
            {children}
        </div>
    )
}