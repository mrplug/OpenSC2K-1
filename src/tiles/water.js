import tile from './tiles';

class water extends tile {
  constructor (options) {
    super(options);

    this.type = 'water';
    this.depth = -31;
  }

  checkTile () {
    if (!super.checkTile())
      return false;

    if (![270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290].includes(this.tileId))
      return false;

    if (this.cell.properties.waterLevel == 'dry')
      return false;

    return true;
  }

  create () {
    if (!this.draw)
      return;

    if (this.cell.tiles.has('building'))
      return false;

    if (this.cell.z < this.cell.scene.city.waterLevel)
      this.offset = (0 - (this.cell.scene.city.waterLevel - this.cell.z) * this.common.layerOffset);

    if (this.cell.properties.waterLevel == 'waterfall')
      this.depth++;

    super.create();
  }
}

export default water;