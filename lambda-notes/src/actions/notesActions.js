export const saveNote = (
  {
    title = '',
    textBody = '',
  } = {}
) => ({
  type: 'SAVE_NOTE',
  note: {title, textBody}
});

export const deleteNote = ({ id } = {}) => ({
  type: 'DELETE_NOTE',
  id,
})

