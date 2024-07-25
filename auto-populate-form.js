const fields = {
  email: `aaron+${new Date().getTime()}@informal.systems`,
  first_name: 'Aaron',
  last_name: 'Wright',
  organization_display_name: 'Informal Systems',
  organization_email: 'finance@informal.systems',
  password: 'cofi-demo-2023',
  password_again: 'cofi-demo-2023',
  accepts_terms: true,
}

Object.entries(fields).forEach(([fieldName, value]) => {
  const input = document.querySelector(`[name=${fieldName}]`)

  if (input) {
    switch (input.type) {
      case 'checkbox':
        input.checked = value
        break
      default:
        input.value = value
        break
    }
  }
})
