import React from 'react';
import {Modal} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FacebookShareButton,TwitterShareButton, WhatsappShareButton} from 'react-share'
import styled from 'styled-components'

const ShareBtn = styled.span`
margin: 10px;
`
const Btns = styled.div`
margin: auto;
width: fit-content;
`

function ShareModal({handleClose, show, url}) {
  
    return (
        <Modal show={show} onHide={handleClose} size='sm'>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <Btns>
             <ShareBtn>
             <FacebookShareButton url={url}><FontAwesomeIcon icon={['fab', 'facebook']} size='2x' color='#0091ea'/></FacebookShareButton>
             </ShareBtn>
             <ShareBtn>
             <TwitterShareButton url={url} > <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' color='#00b0ff'/></TwitterShareButton>
             </ShareBtn>
              <ShareBtn>
              <WhatsappShareButton url={url} > <FontAwesomeIcon icon={['fab', 'whatsapp']} size='2x' color='#00e676'/></WhatsappShareButton>
              </ShareBtn>
             </Btns>
          </Modal.Body>
        </Modal>
    );
  }
  
export default ShareModal