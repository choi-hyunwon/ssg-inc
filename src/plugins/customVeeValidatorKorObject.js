import ko from 'vee-validate/dist/locale/ko'

ko.messages.required = (field) => `${field} 은/는 필수 입력 항목 입니다.`;
ko.messages.email = (field) => `${field} 은/는 올바른 이메일 형식이어야 합니다.`;
ko.messages.numeric = (field) => `${field} 은/는 숫자만 입력가능합니다.`;
ko.messages.min = (field, length) => `${field} 은/는 최소 ${length} 글자 입니다.`;
ko.messages.max = (field, length) => `${field} 은/는 최대 ${length} 글자 입니다.`;

export default ko;