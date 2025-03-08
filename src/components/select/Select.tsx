import styles from "./Select.module.scss"

interface SelectProps {
  lists: Record<string, string>[]
  selected: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

function Select({ lists, selected, onChange }: SelectProps) {
  return (
    <div className={styles.select}>
      <select onChange={onChange} value={selected}>
        <option value="">선택하세요</option>
        {lists.length > 0 &&
          lists
            .sort((a, b) => a.val2.localeCompare(b.val2))
            .map((item) => (
              <option key={item.val1} value={item.val1}>
                {item.val2}
              </option>
            ))}
      </select>
    </div>
  )
}

export default Select
