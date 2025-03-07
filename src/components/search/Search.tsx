import styles from "./Search.module.scss"

interface SearchProps {
  address: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Search({ address, onChange, onKeyDown, onClick }: SearchProps) {
  return (
    <div className={`${styles.input} ${styles.input__ico}`}>
      <input
        type="text"
        placeholder="검색어 입력"
        value={address}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onClick}>
        검색
      </button>
    </div>
  )
}

export default Search
