import { experimental_useFormStatus as useFormStatus } from 'react-dom'
 
export function SubmitButton({value}) {
  const {pending} = useFormStatus();
 
  return (
    <button disabled={pending} class="form-button form-button-submit btn btn-theme btn-theme-dark" id="submit_btn" value={value} type="submit">
      Sign Up
    </button>
  )
}