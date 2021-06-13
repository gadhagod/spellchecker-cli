import constant from 'lodash/constant';
import sumBy from 'lodash/sumBy';
import { VFile, VFileMessage } from 'vfile-reporter';

export const hasMessages = (
  vfiles: VFile[],
  filterMessages: (message: VFileMessage) => boolean = constant(true)
): boolean => {
  const messageCount = sumBy(vfiles, file => file.messages.filter(filterMessages).length);
  return messageCount > 0;
};
