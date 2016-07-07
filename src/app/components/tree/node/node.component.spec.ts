/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NodeComponent } from './node.component';

describe('Component: Node', () => {
  it('should create an instance', () => {
    let component = new NodeComponent();
    expect(component).toBeTruthy();
  });
});
