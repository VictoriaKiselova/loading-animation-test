import Icon from "../Icon/Icon";
import style from "./GlassEffect.module.scss";

export default function GlassEffect() {
  return (
    <div className={style.glassEffectWrapper}>
      <p className={style.glassEffectText}>
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST
      </p>
      <div className={style.glassEffectLogoEmblem}>
        <Icon
          sprite="/sprite.svg"
          id="icon-Vector-1"
          width={14}
          height={15}
          className={style.icon}
        />

        <p className={style.glassEffectLogoEmblemText}>SoundInfluencers</p>
      </div>
    </div>
  );
}
