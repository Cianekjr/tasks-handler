import React from 'react';
import Select from './SelectSection.shards';

const options = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'planned', label: 'Planned' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'code_review', label: 'Code Review' },
  { value: 'done', label: 'Done' },
];

export default function SelectSectionView({
  onChange,
  value,
  currentSection,
}) {
  return (
    <Select
      options={options.filter(option => option.value !== currentSection)}
      value={value}
      placeholder="Transfer to section..."
      onChange={onChange}
    />
  );
}
