
export default {

    isNumDot : {
        validate: (value) => {
            return value.match(/^[0-9.]*$/) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 특수문자 '.'와 숫자만 입력 가능합니다.`
        }
    }

    ,isURLCheck : {
        validate: (value) => {
            return !!value.match(/^(((http(s?))\:\/\/)?)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/i);

        },
        getMessage: (field) => {
            return `${field} 은/는 올바른 형식이어야 합니다.`
        }
    }

    ,isPwCheck : {
        validate: (value) => {
            if(!!value){
                return value.match(/^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/) !== null
            } else {
                return true;
            }
        },
        getMessage: (field) => {
            return `${field} 에는 영문/ 숫자/ 특수문자가 반드시 1개 이상 포함 되어야 합니다.`
        }
    }

    ,isCodeCheck : {
        validate: (value) => {
            return value.match(/^[a-zA-Z0-9_]*$/) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 특수문자 '_'와 영문 및 숫자만 입력 가능합니다.`
        }
    }

    ,isMACAddr : {
        validate: (value) => {
            return value.match(/^([0-9a-f]{1,2}[\.:-]){5}([0-9a-f]{1,2})$/i) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 올바른 형식이어야 합니다. (ex. 50:50:50:6E:6E:6E)`
        }
    }

    ,isLanMACAddr : {
        validate: (value) => {
            return value.match(/^([0-9a-f]{1,2}[\.-]){5}([0-9a-f]{1,2})$/i) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 올바른 형식이어야 합니다. (ex. 00-5D-00-5D-00-5D)`
        }
    }

    ,isAlphaNumDot : {
        validate: (value) => {
            return value.match(/^[a-zA-Z0-9.]*$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 특수문자 '.'와 영문 및 숫자만 입력 가능합니다.`
        }
    }

    ,isLowAlphaNumDot : {
        validate: (value) => {
            return value.match(/^[a-z0-9.]*$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 특수문자 '.'와 영문 소문자 및 숫자만 입력 가능합니다.`
        }
    }

    ,isKorChar : {
        validate: (value) => {
            return value.match(/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣 ]*$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 한글만 입력 가능합니다.`
        }
    }

    ,isAlphaChar : {
        validate: (value) => {
            return value.match(/^[a-zA-Z ]*$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 영문만 입력 가능합니다.`
        }
    }

    ,isKorAlphaNumUBar : {
        validate: (value) => {
            return value.match(/^[ㄱ-ㅎㅏ-ㅣ가-힣-a-zA-Z0-9_]*$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 특수문자 '_'와 한글, 영문 및 숫자만 입력 가능합니다.`
        }
    }
    ,isNoKorChar : {
        validate: (value) => {
            return value.match(/[^A-Za-z0-9_\|\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\\\{\}\[\]\'\"\;\:\<\,\>\.\?\/\s]/gm) === null
        },
        getMessage: (field) => {
            return `${field} 은/는 영문, 숫자 및 특수문자만 입력 가능합니다.`
        }
    }

    ,isNoSpecialChar : {
        validate: (value) => {
            return value.match(/^[ㄱ-ㅎㅏ-ㅣ가-힣-a-zA-Z0-9 ]*$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 특수문자는 입력 가능하지 않습니다.`
        }
    }
    ,isNoEmojiChar : {
        //Emoji : https://emojipedia.org/world-emoji-day/ 
        //* 업데이트되는 경우가 있으므로 운영시 확인 필요 */
        validate: (value) => {
            return value.match(/(\u2602|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g) === null;

        },
        getMessage: (field) => {
            return `${field} 은/는 아이콘 입력 가능하지 않습니다.`
        }
    }
    ,isVerCheck : {
        validate: (value) => {
            return value.match(/^(\d+\.)?(\d+\.)?(\d+\.)?(\d+\.)?(\*|\d+)$/g) !== null
        },
        getMessage: (field) => {
            return `${field} 은/는 올바른 형식이어야 합니다.`
        }
    }
}