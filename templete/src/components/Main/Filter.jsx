import React from 'react'
import { Button } from 'reactstrap';

const Filter = () => {
  return (
    <div>
        <div>
            <h5>성별</h5>
            <div>
            <Button outline color="secondary">남</Button>
            <Button outline color="secondary">여</Button>
            </div>
        </div>
        <div>
            <h5>연령대</h5>
            <div>
            <Button outline color="secondary">10대</Button>
            <Button outline color="secondary">20대</Button>
            <Button outline color="secondary">30대</Button>
            <Button outline color="secondary">40대</Button>
            <Button outline color="secondary">50대</Button>
            <Button outline color="secondary">60대</Button>
            </div>
        </div>
    </div>
  )
}

export default Filter