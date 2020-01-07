// @ts-ignore
import api from '@molgenis/molgenis-api-client'

export const getApplicationForm = async (applicationFormId: string, filename: string) => {
  const applicationForm = await api.get(`/files/${applicationFormId}`)
  const applicationFormBlob = await applicationForm.blob()
  // @ts-ignore just add name
  applicationFormBlob.name = filename
  return applicationFormBlob
}
